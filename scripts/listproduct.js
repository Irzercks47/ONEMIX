const renderListProductTemplate = (data) => {
  return `
        
        <div class="card" style="width: 18rem;">
          <img src="${data.pictureId}" class="card-img-top" alt="...">
          <div class="card-body">
            <a class="card-title" href="/detail.html">${data.name}</a>
            <p class="card-text">Harga : Rp ${data.price}</p>
            
          </div>
        </div>
        </div>

    `;
};

window.addEventListener('load', () => {
  fetch('/api/list')
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      const listContainer = document.getElementById('card_item');
      listContainer.innerHTML = result.map(renderListProductTemplate).join('');
    })
    .catch((error) => {
      console.log(error);
    });
});
