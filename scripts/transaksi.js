window.addEventListener('load', () => {
  document.getElementById('formButton').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const noWA = document.getElementById('noWA').value;
    const alamatDetail = document.getElementById('alamat').value;
    let prodCart = localStorage.getItem('prodInCart');
    prodCart = JSON.parse(prodCart);
    const barang = prodCart;
  
    if (!name || !email || !noWA || !alamatDetail) return console.log('Isi data Anda dengan Lengkap');
  
    fetch(`/api/add?name=${name}&email=${email}&no_wa=${noWA}&alamat_detail=${alamatDetail}&barang${barang}`)
      .then((res) => res.json())
      .then((result) => {
        console.log('succes', result);
      })
      .catch((error) => {
        console.log(error);
      });
  });
})
