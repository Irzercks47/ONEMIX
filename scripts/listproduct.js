const renderListProductTemplate = (data) => {
  return `
        <a href="/detail.html/${data.id}"
        <div class="card col-3">
          <img src="${data.pictureId}" class="card-img-top" alt="${data.name}">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Brand ${data.name}</li>
          <li class="list-group-item">Price ${data.price}</li>
          </ul>
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
