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

window.addEventListener('load', () => {
  fetch('/api/detail')
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      const detailContainer = document.getElementById('detail-card');
      detailContainer.innerHTML = result.map(renderdetailProductTemplate).join('');
    })
    .catch((error) => {
      console.log(error);
    });
});
