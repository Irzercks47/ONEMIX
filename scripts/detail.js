const renderdetailProductTemplate = (Footwear_List) => {
  return `
    <div class="detail-item row">
    <div class="image col">
      <img src="${Footwear_List.pictureId}" alt="${Footwear_List.name}" class="img-fluid float-start rounded" />
    </div>
    <div class="item-info container col row">
      <h2>${Footwear_List.name}</h2>
      <hr />
      <h3>${Footwear_List.name}</h3>
      <div class="item-price">
        <p>Harga :</p>
        <div class="price-container">
          <p>${Footwear_List.price}</p>
        </div>
      </div>
      <div class="item-desc">
        <p>Deskripsi :</p>
        <div class="desc-container">
          <p>${Footwear_List.deskripsi}</p>
        </div>
      </div>
      <button type="button" class="btn btn-outline-dark">add to cart</button>
    </div>
  </div>
  
      `;
};

window.addEventListener('load', () => {
  fetch('/api/detail/')
    .then((res) => res.json())
    .then((result) => {
      const type = typeof result;
      console.log(type);
      const detailContainer = document.getElementById('detail-card');
      detailContainer.innerHTML = renderdetailProductTemplate(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
