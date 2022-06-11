const createCheckoutTemplate = (detaillist) => `
    <head>
        <!-- Bootstrap CSS Untuk TABEL KERANJANG-->
        <link rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

        <!-- fontawesome cdn For Icons Untuk Tanda (+) (-) dan Icon Lainnya-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ==" crossorigin="anonymous" />

</head>

<main>
<!-- ==============cart starts here============== -->
<section class="cart py-5 my-5" id="cart">
    <div class="container ">
        <div class="section_title text-center mb-5">
            <h1 class="text-capitalize">Cart</h1>
        </div>
        <div class="row bg_cart_1 rounded">
            <!--Grid column-->
            <div class="col-md-8 border-right">
                <!-- Card -->
                <div class="mb-3">
                    <div class="pt-4">
                        <h5 class="mb-4">Cart (<span>3</span> items)</h5>
                        <div class="row mb-4">
                            <div class="col-md-5 col-lg-3 col-xl-3">
                                <div class="rounded mb-3 mb-md-0">
                                    <img class="img-fluid w-100 rounded" src="assets/images/dress3.png" alt="Sample">
                                </div>
                            </div>
                            <div class="col-md-7 col-lg-9 col-xl-9">
                                <div>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <h5>Levi's Black Sepatu</h5>
                                            <p class="mb-2 text-muted text-uppercase small">Sepatu</p>
                                            <p class="mb-2 text-muted text-uppercase small">Color: Black</p>												</div>
                                        <div>
                                            <div class="mb-0 w-100">
                                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="btn btn-sm btn-outline-primary">
                                                    <i class="fas fa-minus"></i>
                                                </button>
                                                <input class="quantity text-center" min="0" max="10" name="quantity" value="1" type="number">
                                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="btn btn-sm btn-outline-primary">
                                                    <i class="fas fa-plus"></i>
                                                </button>
                                            </div>
                                            <small class="form-text text-muted text-center">
                                                (Note: 1 Piece)
                                            </small>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <a href="javascript:;" type="button" class="small text-uppercase mr-3">
                                                <i class="fas fa-trash-alt mr-1"></i>
                                                Remove item 
                                            </a>
                                        </div>
                                        <p class="mb-0">
                                            <span><strong id="summary">Rp 599</strong></span>
                                        </p class="mb-0">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="mb-4">
                            <div class="row mb-4">
                                <div class="col-md-5 col-lg-3 col-xl-3">
                                    <div class="rounded mb-3 mb-md-0">
                                        <img class="img-fluid w-100 rounded" src="assets/images/dress2.png" alt="Sample">
                                    </div>
                                </div>
                                <div class="col-md-7 col-lg-9 col-xl-9">
                                    <div>
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <h5>REAL White Sendal</h5>
                                                <p class="mb-3 text-muted text-uppercase small">Sendal</p>
                                                <p class="mb-2 text-muted text-uppercase small">Color: White</p>														<p class="mb-3 text-muted text-uppercase small">Size: L</p>
                                            </div>
                                            <div>
                                                <div class="mb-0 w-100">
                                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="btn btn-sm btn-outline-primary">
                                                        <i class="fas fa-minus"></i>
                                                    </button>
                                                    <input class="quantity text-center" min="0" max="10" name="quantity" value="1" type="number">
                                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="btn btn-sm btn-outline-primary">
                                                        <i class="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <a href="javascript:;" type="button" class="card-link-secondary small text-uppercase mr-3">
                                                    <i class="fas fa-trash-alt mr-1"></i> 
                                                    Remove item
                                                </a>
                                            </div>
                                            <p class="mb-0">
                                                <span><strong>Rp 399</strong></span>
                                            </p class="mb-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <!--Grid column-->
            <div class="col-md-4 rounded">
                <!-- Card -->
                <div class="mb-3">
                    <div class="pt-4">
                        <h5 class="mb-3">Order summary</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
                                <span>Levi's Black Sepatu</span>
                                <span>x1</span>
                                <span>Rp 599</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
                                <span>REAL White Sendal</span>
                                <span>x2</span>
                                <span>Rp 798</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
                                <span>Delivery Charges</span>
                                <span>Rp 53</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-top border-bottom px-0 mb-3">
                                <div>
                                    <strong>Total amount</strong>
                                </div>
                                <span><strong>Rp 1450</strong></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Card -->
            </div>
            <!--Grid column-->
        </div>
    </div>
</section>

<div class="container">
    <div class="header">
    <h2 class="label">Isi Data Pengiriman Belanja</h2></p>
    <form class="form-name" action="home.html" method="post" name="form" onsubmit="return validated()">

        <div class="font">Email</div>
        <input autocomplete="off" type="text" name="email">
        <div id="email_error">Please fill up your Email</div>

        <div class="font font2">Nama Lengkap</div>
        <input type="text" name="fullname">
        <div id="fullname_error">Please fill Nama Lengkap or more than 3 Characters</div>

        <div class="font font2">Nomor Handphone</div>
        <input type="number" name="nohp">
        <div id="nohp_error">Please fill up your Nomor Handphone</div>
        
        <div class="font font2">Alamat</div>
        <input type="text" name="alamat">
        <div id="alamat_error">Please fill up your Alamat</div>
        <button type="submit">Go To Checkout</button>
        
    </form>
</div>	
        `;

/*INI MERUPAKAN FORM VALIDATION JAVASCRIPT PADA CHECKOUT, YANG MERUPAKAN DATA PENGIRIMAN ...  */
/*Masih Belum fix karena gak tau harus di taruh dimana ... */
/*Jadi sementara aku taruh sini dulu */
	//Validtion Code For Inputs

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

	
	function validated(){
		if (email.value.length < 9) {
			email.style.border = "1px solid red";
			email_error.style.display = "block";
			email.focus();
			return false;
		}
		if (fullname.value.length < 3) {
			fullname.style.border = "1px solid red";
			fullname_error.style.display = "block";
			fullname.focus();
			return false;
		}

		if (nohp.value.length < 6) {
			nohp.style.border = "1px solid red";
			nohp_error.style.display = "block";
			nohp.focus();
			return false;
		}

		if (alamat.value.length < 6) {
			alamat.style.border = "1px solid red";
			alamat_error.style.display = "block";
			alamat.focus();
			return false;
		}
	
	}
	function email_Verify(){
		if (email.value.length >= 8) {
			email.style.border = "1px solid silver";
			email_error.style.display = "none";
			return true;
		}
	}
	function fullname_Verify(){
		if (fullname.value.length >= 3) {
			fullname.style.border = "1px solid silver";
			fullname_error.style.display = "none";
			return true;
		}
	}
	function nohp_Verify(){
		if (nohp.value.length >= 5) {
			nohp.style.border = "1px solid silver";
			nohp_error.style.display = "none";
			return true;
		}
	}

	function alamat_Verify(){
		if (alamat.value.length >= 5) {
			alamat.style.border = "1px solid silver";
			alamat_error.style.display = "none";
			return true;
		}
	}
	











