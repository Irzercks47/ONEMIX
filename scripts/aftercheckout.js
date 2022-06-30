const createAfterCheckoutTemplate = (detaillist) => `

<<<<<<< HEAD
=======
     	</tr>
     </thead>
     <tbody>
     	  <tr>
     	  	  <td><img src ="./assets/product-1.png" class="img-keranjang"></td>
     	  	  <td>Sepatu Nikers 1</td>
     	  	  <td>Rp. 150.000</td>
				 <td>
					 <span class="mx-2">1</span>
				 </td>
     	  	  <td>Rp. 150.000</td>
     	  </tr>

		   <tr>
			<td><img src ="./assets/product-2.png" class="img-keranjang"></td>
			<td>Sepatu Nikers 2</td>
			<td>Rp. 250.000</td>
			<td>
				<span class="mx-2">1</span>
			</td>
			<td>Rp. 250.000</td>
	  </tr>

	  <tr>
		<td><img src ="./assets/product-3.png" class="img-keranjang"></td>
		<td>Sepatu Nikers 3</td>
		<td>Rp. 350.000</td>
		<td>
			<span class="mx-2">1</span>
		</td>
		<td>Rp. 350.000</td>
  </tr>

     	  <tr>
     	  	  <td><img src ="./assets/product-4.png" class="img-keranjang"></td>
     	  	  <td>Sepatu Nikers 4</td>
     	  	  <td>Rp. 450.000</td>
				 <td>
					 <span class="mx-2">1</span>
				 </td>
     	  	  <td>Rp. 450.000</td>
     	  </tr>
     </tbody>
   </table>

   <div class="container">
		<div class="col">
			<table class="table">
				</div>
					</div>
     					<thead>
     		<tr>
     	 		<th scope="col" colspan="2">Total Keranjang Belanja</th>
     		</tr>
    </thead>
     <tbody>
		<tr>
			<td class="fw-bold">Total Harga</td>
			<td>Rp. 1.200.000</td>
		</tr>
     </tbody>
   </table>
</div>
</div>
</div>


<div class="">
				<h1>Metode Pembayaran</h1>
			</div>	

			<div class="container">
				<div class="row row-produk">
					<div class="col">
						<div class="box">
							<table class="table">
								
							<h3>Pilih metode pembayaran</h3>							
							
							<p></p>

							
							<button type="button" class="collapsible">Bank BCA</button>
							<div class="content">
								<p></p>
								<p style="text-align:left;">Silakan Lakukan Pembayaran Sesuai Nominal ke Rekening BCA Berikut: 5410425787 A.n ONEMIX</p>
								<p style="text-align:left;">Nomor WA : +6281317203596</p>
								<p><h2 style="text-align:left;">Jika Berbeda Bank akan terkena Biaya Admin Sebesar Rp10.000</h2></p>
								<p></p>
								<p style="text-align:left;">Melalui ATM.</p>
								<p style="text-align:left;">1. Masukkan kartu ATM dan PIN BCA kamu.</p>
								<p style="text-align:left;">2. Pada menu utama, pilih menu ” Transaksi lainnya “.</p>
								<p style="text-align:left;">3. Pilih menu “Transfer” dan kemudian pilih “BCA Virtual Account“.</p>
								<p style="text-align:left;">4. Masukkan no. BCA Virtual Account & klik “Lanjutkan“.</p>
								<p style="text-align:left;">5. Periksa kembali rincian pembayaran kamu, lalu pilih Ya.</p>
								<p></p>
								<p style="text-align:left;">Melalui BCA Mobile (m-BCA).</p>
								<p style="text-align:left;">1. Lakukan Log in pada aplikasi BCA Mobile</p>
								<p style="text-align:left;">2. Pilih m-BCA.</p>
								<p style="text-align:left;">3. Masukkan kode akses m-BCA.</p>
								<p style="text-align:left;">4. Pilih m-Transfer.</p>
								<p style="text-align:left;">5. Pilih BCA Virtual Account.</p>
								<p style="text-align:left;">6. Masukkan nomor BCA Virtual Account dan Nominal Pembayaran.</p>
								<p style="text-align:left;">5. Masukkan PIN m-BCA.</p>
								<p style="text-align:left;">5. Pembayaran selesai</p>

							</div>

							</tr>

						</div>
					</div>
				</div>
			</div>


						<div class="">
							<tr>
							<td>
								<button type="button" class="btn btn-dark btn-sm"> Bayar Sekarang </i></button>
							</td>
						</tr>
						</div>
>>>>>>> d1f5a7d (merubah pembayaran menjadi 1)
`;

let coll = document.getElementsByClassName('collapsible');
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}
