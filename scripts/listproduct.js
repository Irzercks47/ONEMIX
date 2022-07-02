const renderListProductTemplate = (Footwear_List) => {
  return `
          <div class="card col-2" style="width: 18rem;">
            <img src="${Footwear_List.pictureId}" class="card-img-top" alt="...">
            <div class="card-body">
              <a class="card-title" href="/#/detail/${Footwear_List.id}" >${Footwear_List.name}</a>
              <p class="card-text">Harga : Rp ${Footwear_List.price}</p>
              
            </div>
          </div>
          </div>
  
      `;
};

window.addEventListener('load', () => {
  console.log(fetch('/api/list'));
  fetch('/api/list')
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      const listContainer = document.getElementById('card_item');
      console.log(listContainer);
      listContainer.innerHTML = result.map(renderListProductTemplate).join('');
    })
    .catch((error) => {
      console.log(error);
    });
});
