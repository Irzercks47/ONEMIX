const renderListKeranjang = (data) => {
  return `
  <tr>
  <td><img src="url gambar produk" alt="gambar produk" class="custom-img" width="55"></td>
  <td><p style="margin-top: 12px">nama produk</p></td>
  <td><p class="prim-color" style="margin-top: 12px">Harga Produk</p></td>
  <td><a href="" class="btn btn-danger">Delete</button></td>
</tr>
  `;
};

window.addEventListener('load', () => {
  fetch('/api/list')
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      const listContainer = document.getElementById('listkeranjang');
      listContainer.innerHTML = result.map(renderListKeranjang).join('');
    })
    .catch((error) => {
      console.log(error);
    });
});
