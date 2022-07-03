import {renderListKeranjang} from '../../../scripts/keranjang'

const Cart = {
    async init ({cartProduct, addCartButton, cartContainer, deleteProduct, increaseProduct, decreaseProduct}) {
        this._cartProduct = cartProduct;
        this._addCartButton = addCartButton;
        this._cartContainer = cartContainer;
        this._deleteProduct = deleteProduct;
        this._increaseProduct = increaseProduct;
        this._decreaseProduct = decreaseProduct;


        this._addData();
    },

    _addData() {
        this._addCartButton.addEventListener('click', () => {
            console.log(this._cartProduct);
            console.log(this._addCartButton);

            this._totalProducts(this._cartProduct);
            this._totalCost(this._cartProduct);
        });
    },

    _totalProducts(product, action) {
        let totalProduct = localStorage.getItem('totalProd');
        console.log('total Product');
        totalProduct = parseInt(totalProduct);
        let productInCart = localStorage.getItem('prodInCart');
        productInCart = JSON.parse(productInCart);
        if (action) {
            localStorage.setItem('totalProd', totalProduct-1);
            document.querySelector('#total-cart').textContent = totalProduct-1;

        } else if (totalProduct) {
            localStorage.setItem('totalProd', totalProduct+1);
            document.querySelector('#total-cart').textContent = totalProduct+1;
        } else {
            localStorage.setItem('totalProd', 1);
            document.querySelector('#total-cart').textContent = 1;
        }

        this._setProduct(product);
    },

    _setProduct(product) {
        console.log('set product');
        let productInCart = localStorage.getItem('prodInCart');
        productInCart = JSON.parse(productInCart);
        if (productInCart != null) {
            if (productInCart[product.name] == undefined) {
                productInCart = {
                    ...productInCart, 
                    [product.name]: product
                }
            }
            productInCart[product.name].inCart+=1
        } else {
            product.inCart = 1
            productInCart = {
                [product.name]: product,
            }
        } 
        localStorage.setItem('prodInCart', JSON.stringify(productInCart));
    },

    _totalCost (product, action) {
        let totalPrice = localStorage.getItem('totalPrice');
        if (action) {
            price = parseInt(totalPrice);
            localStorage.setItem('totalPrice', price-product.price);
        } else if (totalPrice != null) {
            price = parseInt(totalPrice);
            localStorage.setItem('totalPrice', price+product.price);
        } else {
            localStorage.setItem('totalPrice', product.price);
        }
        console.log('totalCost');
    },

    _manageProduct () {
        console.log('manage product');
        let currQty = 0;
        let increaseProduct = document.querySelectorAll('.increaseProduct');
        let decreaseProduct = document.querySelectorAll('.decreaseProduct');
        console.log(increaseProduct);
        console.log(decreaseProduct);
        let currProduct = '';
        let productInCart = localStorage.getItem('prodInCart');
        productInCart = JSON.parse(productInCart);
        for(let i = 0; i < increaseProduct.length; i++) {
            increaseProduct[i].addEventListener('click', ()=> {
                currQty = increaseProduct[i].parentElement.previousElementSibling.querySelector('.numberProduct').textContent;
                console.log(currQty);
                currProduct = increaseProduct[i].parentElement.parentElement.parentElement.previousElementSibling.querySelector('.product_name').textContent;
                console.log(currProduct);
    
                productInCart[currProduct].inCart += 1;
                this._totalProducts(productInCart[currProduct]);
                this._totalCost(productInCart[currProduct]);
                localStorage.setItem('prodInCart', JSON.stringify(productInCart));
                this._displayCart();
            });

            decreaseProduct[i].addEventListener('click', () => {
                currQty = decreaseProduct[i].parentElement.parentElement.querySelector('.numberProduct').textContent;
                console.log(currQty);
                currProduct = increaseProduct[i].parentElement.parentElement.parentElement.previousElementSibling.querySelector('.product_name').textContent;
                console.log(currProduct);
                
                if(productInCart[currProduct].inCart > 1) {
                    productInCart[currProduct].inCart -=1;
                    this._totalProducts(productInCart[currProduct], "decrease");
                    this._totalCost(productInCart[currProduct], "decrease");
                    localStorage.setItem('productInCart', JSON.stringify(productInCart));
                    this._displayCart();
                }
            });
        }
    },

    _deleteProductInCart() {
        let totalPrice = localStorage.getItem('totalPrice');
        let deleteProduct = document.querySelectorAll('.removeProduct')
        let productInCart = localStorage.getItem('prodInCart');
        let totalProduct = localStorage.getItem('totalProd');
        productInCart = JSON.parse(productInCart);
        let productName;

        for(let i = 0; i < deleteProduct.length; i++) {
            deleteProduct[i].addEventListener('click', () => {
                productName = deleteProduct[i].parentElement.parentElement.parentElement.querySelector('.product_name').textContent;
                console.log(productName);
                localStorage.setItem('totalProd',totalProduct - productInCart[productName].inCart);
                localStorage.setItem('totalPrice',totalPrice - (productInCart[productName].price * productInCart[productName].inCart));

                delete productInCart[productName];
                localStorage.setItem('prodInCart', JSON.stringify(productInCart));

                this._displayCart();
                this._onLoadCart();
            })
        }
        console.log('delete');
    },

    _onLoadCart() {
        let totalProduct = localStorage.getItem('totalProd');
        if (totalProduct) {
            document.querySelector('#total-cart').textContent = totalProduct;
        }
        console.log('onLoad');
    },

    _displayCart() {
        console.log('display cart');
        const listContainer = document.querySelector('#cartProduct');
        let productInCart = localStorage.getItem('prodInCart');
        productInCart = JSON.parse(productInCart);
        console.log(productInCart);
        if (productInCart) {
            listContainer.innerHTML = '';
            Object.values(productInCart).map(product => {
                listContainer.innerHTML += renderListKeranjang(product);
                document.querySelector('.totalPrice').textContent = 'Rp. ' + localStorage.getItem('totalPrice');
                this._deleteProductInCart();
                this._manageProduct();
            })
        } 
        console.log('display');
    },
}

export default Cart;