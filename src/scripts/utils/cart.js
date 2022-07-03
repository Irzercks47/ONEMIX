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

            this._totalProducts();
            this._totalCost();
        });
    },

    _totalProducts(action) {
        let totalProduct = localStorage.getItem('totalProd');
        console.log('total Product')
        totalProduct = parseInt();
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

        this._setProduct();
    },

    _setProduct() {
        let productInCart = localStorage.getItem('prodInCart');
        productInCart = JSON.parse(productInCart);
        console.log(productInCart);
        if (productInCart != null) {
            if (productInCart[this._cartProduct.name] == undefined) {
                productInCart = {
                    ...productInCart, 
                    [this._cartProduct.name]: this._cartProduct
                }
            }
            productInCart[this._cartProduct.name].inCart+=1
        } else {
            this._cartProduct.inCart = 1
            productInCart = {
                [this._cartProduct.name]: this._cartProduct,
            }
        } 
        localStorage.setItem('prodInCart', JSON.stringify(productInCart));
    },

    _totalCost (action) {
        console.log('total cost');
        let totalPrice = localStorage.getItem('totalPrice');
        if (action) {
            price = parseInt(totalPrice);
            localStorage.setItem('totalPrice', price-this._cartProduct.price);
        } else if (totalPrice != null) {
            price = parseInt(totalPrice);
            localStorage.setItem('totalPrice', price+this._cartProduct.price);
        } else {
            localStorage.setItem('totalPrice', this._cartProduct.price);
        }
    },

    _manageProduct () {
        let currQty = 0;
        let currProduct = '';
        let productInCart = localStorage.getItem('prodInCart');
        productInCart = JSON.parse(productInCart);
        for(let i = 0; i < this._increaseProduct.length; i++) {
            this._increaseProduct[i].addEventListener('click', ()=> {
                currQty = this._increaseProduct[i].parentElement.previousElementSibling.querySelector('.numberProduct').textContent;
                console.log(currQty);
                currProduct = this._increaseProduct[i].parentElement.parentElement.parentElement.previousElementSibling.querySelector('.product_name').textContent;
                console.log(currProduct);
    
                productInCart[currProduct].inCart += 1;
                this._totalProducts(productInCart[currProduct]);
                this._totalCost(productInCart[currProduct]);
                localStorage.setItem('prodInCart', JSON.stringify(productInCart));
                //method display
            });

            this._decreaseProduct[i].addEventListener('click', () => {
                currQty = this._decreaseProduct[i].parentElement.parentElement.querySelector('.numberProduct').textContent;
                console.log(currQty);
                currProduct = this._increaseProduct[i].parentElement.parentElement.parentElement.previousElementSibling.querySelector('.product_name').textContent;
                console.log(currProduct);
                
                if(productInCart[currProduct].inCart > 1) {
                    productInCart[currProduct].inCart -=1;
                    this._totalProducts(productInCart[currProduct], "decrease");
                    this._totalCost(productInCart[currProduct], "decrease");
                    localStorage.setItem('productInCart', JSON.stringify(productInCart));
                    //method display
                }
            });
        }
    },

    _deleteProductInCart() {
        let totalPrice = localStorage.getItem('totalPrice');
        let productInCart = localStorage.getItem('prodInCart');
        let totalProduct = localStorage.getItem('totalProd');
        productInCart = JSON.parse(productInCart);
        let productName;

        for(let i = 0; i < this._deleteProduct.length; i++) {
            this._deleteProduct[i].addEventListener('click', () => {
                productName = this._deleteProduct[i].parentElement.parentElement.parentElement.querySelector('.product_name').textContent;
                console.log(productName);
                localStorage.setItem('totalProd',totalProduct - productInCart[productName].inCart);
                localStorage.setItem('totalPrice',totalPrice - (productInCart[productName].price * productInCart[productName].inCart));

                delete productInCart[productName];
                localStorage.setItem('prodInCart', JSON.stringify(productInCart));

                //method display
                //method onload
            })
        }
    },
}

export default Cart;