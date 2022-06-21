import UrlParser from '../../routes/url-parser';
import main from '../../../../api/detail';
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
                        <h3>${data.name}</h3>
                        <div class="item-price">
                        <p>Harga :</p>
                        <div class="price-container">
                            <p>${data.price}</p>
                        </div>
                        </div>
                        <div class="item-desc">
                        <p>Deskripsi :</p>
                        <div class="desc-container">
                            <p>${data.deskripsi}</p>
                        </div>
                        </div>
                        <button type="button" class="btn btn-outline-dark">add to cart</button>
                    </div>
                </div>
                `;
        };

        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detail = main(url.id);
        console.log(detail);
        detail
        .then((res) => {
            console.log(res)
            return res;

        })
        .then((datas) => {
            const detailContainer = document.getElementById('detail-card');
            datas.forEach(data => {
            detailContainer.innerHTML = renderdetailProductTemplate(data);
            })
            console.log(datas);
        });
    },
};

export default DetailPage;