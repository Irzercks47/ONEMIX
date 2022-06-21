var email = document.forms['form']['email'];
var fullname = document.forms['form']['fullname'];
var nohp = document.forms['form']['nohp'];
var alamat = document.forms['form']['alamat'];

var email_error = document.getElementById('email_error');
var fullname_error = document.getElementById('fullname_error');
var nohp_error = document.getElementById('nohp_error');
var alamat_error = document.getElementById('alamat_error');

email.addEventListener('textInput', email_Verify);
fullname.addEventListener('textInput', fullname_Verify);
nohp.addEventListener('textInput', nohp_Verify);
alamat.addEventListener('textInput', nohp_Verify);

function validated() {
  if (email.value.length < 9) {
    email.style.border = '1px solid red';
    email_error.style.display = 'block';
    email.focus();
    return false;
  }
  if (fullname.value.length < 3) {
    fullname.style.border = '1px solid red';
    fullname_error.style.display = 'block';
    fullname.focus();
    return false;
  }

  if (nohp.value.length < 6) {
    nohp.style.border = '1px solid red';
    nohp_error.style.display = 'block';
    nohp.focus();
    return false;
  }

  if (alamat.value.length < 6) {
    alamat.style.border = '1px solid red';
    alamat_error.style.display = 'block';
    alamat.focus();
    return false;
  }
}
function email_Verify() {
  if (email.value.length >= 8) {
    email.style.border = '1px solid silver';
    email_error.style.display = 'none';
    return true;
  }
}
function fullname_Verify() {
  if (fullname.value.length >= 3) {
    fullname.style.border = '1px solid silver';
    fullname_error.style.display = 'none';
    return true;
  }
}
function nohp_Verify() {
  if (nohp.value.length >= 5) {
    nohp.style.border = '1px solid silver';
    nohp_error.style.display = 'none';
    return true;
  }
}

function alamat_Verify() {
  if (alamat.value.length >= 5) {
    alamat.style.border = '1px solid silver';
    alamat_error.style.display = 'none';
    return true;
  }
}

/* Fungsionalitas Checkout. 
seperti jika menambah barang menjadi tiga total harga barang akan bertambah
seperti penjumlahan dan pengurangan
serta ada tambahan ongkir tetap didalamnya*/
var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
const decreaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  console.log(itemprice.innerHTML);
  // console.log(itemval.value);
  if (itemval.value <= 0) {
    itemval.value = 0;
    alert('Negative quantity not allowed');
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    itemval.style.background = '#fff';
    itemval.style.color = '#000';
    itemprice.innerHTML = parseInt(itemprice.innerHTML) - 650;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 650;
    total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
  }
};
const increaseNumber = (incdec, itemprice) => {
  const itemval = document.getElementById(incdec);
  const itemprice = document.getElementById(itemprice);
  // console.log(itemval.value);
  if (itemval.value >= 5) {
    itemval.value = 5;
    alert('max 5 allowed');
    itemval.style.background = 'red';
    itemval.style.color = '#fff';
  } else {
    itemval.value = parseInt(itemval.value) + 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) + 650;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 650;
    total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
  }
};
