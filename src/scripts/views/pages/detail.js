import UrlParser from '../../routes/url-parser';
import main from '../../../../api/detail';
import Cart from '../../utils/cart';
import { async } from 'regenerator-runtime';

const DetailPage = {
    async render() {
        return `
            <div class="detail-card container" id="detail-card"></div>
            `;
    },

    async afterRender() {
        const renderdetailProductTemplate = (data) => {
            return `
                <div class="detail-item row">
                    <div class="image col">
                        <img src="${data.pictureId}" alt="${data.name}" class="img-fluid float-start rounded" />
                    </div>
                    <div class="item-info container col">
                        <h2>${data.name}</h2>
                        <hr />
                        <h3>${data.brand}</h3>
                        <div class="item-price">
                        <p>Harga :</p>
                        <div class="price-container">
                            <p>Rp ${data.price}</p>
                        </div>
                        </div>
                        <div class="item-desc">
                        <p>Deskripsi :</p>
                        <div class="desc-container">
                            <p>${data.deskripsi}</p>
                        </div>
                        </div>
                        <button type="button" class="btn btn-outline-dark js-add-cart">add to cart</button>
                    </div>
                </div>
                `;
        };

        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detail = main(url.id);
        console.log(detail);
        const addvar = detail
        .then((res) => {
            console.log(res)
            return res;

        })
        .then((datas) => {
            const detailContainer = document.getElementById('detail-card');
            datas.forEach(data => {
                detailContainer.innerHTML = renderdetailProductTemplate(data);
                Cart.init({
                    addCartButton : document.querySelector('.js-add-cart'),
                    cartProduct: {
                        id: data.id,
                        name: data.name,
                        brand: data.brand,
                        pictureId: data.pictureId,
                        price: data.price,
                        inCart: 0,
                    },
                });
                console.log(document.querySelector('.js-add-cart'));
            })
            console.log(datas);
        });
        console.log(addvar);
        const total_cart = document.getElementById("total-cart")
  
  function changeCart(tipe) {
    const current_total = parseInt(total_cart.textContent)
    if ( tipe == 0 ) {
      if ( current_total > 0 ) {
        total_cart.innerHTML = current_total-1
      }
    } else {
      total_cart.innerHTML = current_total+1
    }
  }
        // const aadCart = document.getElementsByClassName('js-add-cart');

    },
};

export default DetailPage;
