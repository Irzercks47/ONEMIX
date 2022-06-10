const createCheckoutTemplate = (detaillist) => `
    <head>
        <!-- Bootstrap CSS Untuk TABEL KERANJANG-->
        <link rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
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
				<h2>Isi Data Diri</h2>
			</div>
			<form id="form" class="form">
				<div class="form-name">
					<label for="username">Nama Lengkap</label>
					<input type="text" placeholder="florinpop17" id="username" />
					<i class="fas fa-check-circle"></i>
					<i class="fas fa-exclamation-circle"></i>
					<small>Error message</small>
				</div>
				<div class="form-name">
					<label for="username">Email</label>
					<input type="email" placeholder="a@florin-pop.com" id="email" />
					<i class="fas fa-check-circle"></i>
					<i class="fas fa-exclamation-circle"></i>
					<small>Error message</small>
				</div>
				<div class="form-name">
					<label for="username">Nomor HandPhone</label>
					<input type="number" placeholder="Nomor HandPhone" id="nohp"/>
					<i class="fas fa-check-circle"></i>
					<i class="fas fa-exclamation-circle"></i>
					<small>Error message</small>
				</div>
				<div class="form-name">
					<label for="username">Alamat</label>
					<input type="text" placeholder="Alamat Pengiriman" id="alamat"/>
					<i class="fas fa-check-circle"></i>
					<i class="fas fa-exclamation-circle"></i>
					<small>Error message</small>
				</div>
				<button>Go to Checkout</button>
			</form>
		</div>
        `;

/*INI MERUPAKAN FORM VALIDATION JAVASCRIPT PADA CHECKOUT, YANG MERUPAKAN DATA PENGIRIMAN ...  */
/*Masih Belum fix karena gak tau harus di taruh dimana ... */
/*Jadi sementara aku taruh sini dulu */
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const nohp = document.getElementById('nohp');
const alamat = document.getElementById('alamat');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const nohpValue = nohp.value.trim();
	const alamatValue = alamat.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(nohpValue === '') {
		setErrorFor(nohp, 'Nomor Handphone cannot be blank');
	} else {
		setSuccessFor(nohp);
	}
	
	if(alamatValue === '') {
		setErrorFor(alamat, 'Alamat cannot be blank');
	} else {
		setSuccessFor(alamat);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-name error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-name success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}











