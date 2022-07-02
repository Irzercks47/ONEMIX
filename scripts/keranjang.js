import Cart from "../src/scripts/utils/cart";

const renderListKeranjang = (data) => {
  return `
  <div class="row cartProduct">
                    <!-- cart images div -->
                    <div
                        class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                        <img src="${data.pictureId}" class="img-fluid" alt="cart img">
                    </div>
                    <!-- cart product details -->
                    <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                        <div class="row">
                            <!-- product name  -->
                            <div class="col-6 card-title">
                                <h1 class="mb-4 product_name">${data.name}</h1>
                                <p class="mb-2">${data.brand}</p>
                                <p class="mb-2">Warna: HITAM</p>
                            </div>
                            <!-- quantity inc dec -->
                            <div class="col-6">
                                <ul class="pagination justify-content-end set_quantity">
                                    <li class="page-item">
                                        <button class="page-link decreaseProduct"
                                            onclick="decreaseNumber('textbox','itemval')">
                                            <i class="fas fa-minus"></i> </button>
                                    </li>
                                    <li class="page-item"><input type="text" name="" class="page-link numberProduct"
                                            value="1" id="textbox">
                                    </li>
                                    <li class="page-item">
                                        <button class="page-link increaseProduct"
                                            onclick="increaseNumber('textbox','itemval')"> <i
                                                class="fas fa-plus"></i></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- //remover move and price -->
                        <div class="row">
                            <div class="col-8 d-flex justify-content-between remove_wish">
                                <p class="removeProduct"><i class="fas fa-trash-alt"></i> REMOVE ITEM</p>
                            </div>
                            <div class="col-4 d-flex justify-content-end price_money">
                                <h3>Rp <span id="itemval">${data.price} </span></h3>
                            </div>
                        </div>
                    </div>
                </div>
  `;
};

window.addEventListener('DOMContentLoaded', () => {
  fetch('/api/list')
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      
    const listContainer = document.querySelector('#cartProduct')
    listContainer.innerHTML = result.map(renderListKeranjang).join('');
    })
    .catch((error) => {
      console.log(error);
    });
});

window.addEventListener('load', () => {
    Cart.init({
        cartContainer: document.querySelector('#cartProduct'),
        deleteProduct: document.querySelectorAll('.removeProduct'),
        increaseProduct: document.querySelectorAll('.increaseProduct'),
        decreaseProduct: document.querySelectorAll('.decreaseProduct'),
    })
    console.log(document.querySelector('#cartProduct'));
    console.log(document.querySelectorAll('.increaseProduct'));
    console.log(document.querySelectorAll('.numberProduct'))
    console.log(document.querySelectorAll('.increaseProduct'));
    console.log(document.querySelectorAll('.decreaseProduct'));
})