const createCheckoutTemplate = (detaillist) => `
<!-- Bootstrap 5 CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
    integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ=="
    crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
    integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
    crossorigin="anonymous"></script>

<link rel="stylesheet" href="css/style.css">
<title>Checkout</title>
<link href="#favicon" rel="icon">
<link href="#" rel="icon">
</head>

<body class="bg-light">
<div class="container-fluid">
    <div class="row">
        <div class="col-md-10 col-11 mx-auto">
            <div class="row mt-5 gx-3">
                <!-- left side div -->
                <div class="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                    <div class="card p-4">
                        <h2 class="py-4 font-weight-bold">Cart (2 items)</h2>
                        <div class="row">
                            <!-- cart images div -->
                            <div
                                class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                                <img src="images/img2.jpg" class="img-fluid" alt="cart img">
                            </div>
                            <!-- cart product details -->
                            <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                                <div class="row">
                                    <!-- product name  -->
                                    <div class="col-6 card-title">
                                        <h1 class="mb-4 product_name">Sepatu Keren</h1>
                                        <p class="mb-2">Sepatu - Modis</p>
                                        <p class="mb-2">Warna: BLUE</p>
                                    </div>
                                    <!-- quantity inc dec -->
                                    <div class="col-6">
                                        <ul class="pagination justify-content-end set_quantity">
                                            <li class="page-item">
                                                <button class="page-link "
                                                    onclick="decreaseNumber('textbox','itemval')">
                                                    <i class="fas fa-minus"></i> </button>
                                            </li>
                                            <li class="page-item"><input type="text" name="" class="page-link"
                                                    value="0" id="textbox">
                                            </li>
                                            <li class="page-item">
                                                <button class="page-link"
                                                    onclick="increaseNumber('textbox','itemval')"> <i
                                                        class="fas fa-plus"></i></button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- //remover move and price -->
                                <div class="row">
                                    <div class="col-8 d-flex justify-content-between remove_wish">
                                        <p><i class="fas fa-trash-alt"></i> REMOVE ITEM</p>
                                        <p><i class="fas fa-heart"></i> MOVE TO WISH LIST </p>
                                    </div>
                                    <div class="col-4 d-flex justify-content-end price_money">
                                        <h3>Rp<span id="itemval">0.00 </span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <!-- 2nd cart product -->
                    <div class="card p-4">
                        <div class="row">
                            <!-- cart images div -->
                            <div
                                class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                                <img src="images/img3.jpg" class="img-fluid" alt="cart img">
                            </div>
                            <!-- cart product details -->
                            <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                                <div class="row">
                                    <!-- product name  -->
                                    <div class="col-6 card-title">
                                        <h1 class="mb-4 product_name"> Sepatu Sneakers</h1>
                                        <p class="mb-2">Sepatu - Casual</p>
                                        <p class="mb-2">COLOR: Item</p>
                                    </div>
                                    <!-- quantity inc dec -->
                                    <div class="col-6">
                                        <ul class="pagination justify-content-end set_quantity">
                                            <li class="page-item">
                                                <button class="page-link "
                                                    onclick="decreaseNumber('textbox1','itemval1')"> <i
                                                        class="fas fa-minus"></i> </button>
                                            </li>
                                            <li class="page-item"><input type="text" name="" class="page-link"
                                                    value="0" id="textbox1">
                                            </li>
                                            <li class="page-item">
                                                <button class="page-link"
                                                    onclick="increaseNumber('textbox1','itemval1')"> <i
                                                        class="fas fa-plus"></i></button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- //remover move and price -->
                                <div class="row">
                                    <div class="col-8 d-flex justify-content-between remove_wish">
                                        <p><i class="fas fa-trash-alt"></i> REMOVE ITEM </p>
                                        <p><i class="fas fa-heart"></i> MOVE TO WISH LIST </p>
                                    </div>
                                    <div class="col-4 d-flex justify-content-end price_money">
                                        <h3>Rp<span id="itemval1">0.00 </span> </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- right side div -->
                <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                    <div class="right_side p-3 shadow bg-white">
                        <h2 class="product_name mb-5">The Total Amount Of</h2>
                        <div class="price_indiv d-flex justify-content-between">
                            <p>Product amount</p>
                            <p>Rp<span id="product_total_amt">0.00</span></p>
                        </div>
                        <div class="price_indiv d-flex justify-content-between">
                            <p>Ongkir</p>
                            <p>Rp<span id="shipping_charge">50</span></p>
                        </div>
                        <hr />
                        <div class="total-amt d-flex justify-content-between font-weight-bold">
                            <p>The total amount of (including GST)</p>
                            <p>Rp<span id="total_cart_amt">0.00</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div> 

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
	











