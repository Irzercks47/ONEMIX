const createAfterCheckoutTemplate = (detaillist) => `
<div class="box-container">
	<div class="col">
		<table class="table">
	</div>
</div>
     <thead>
     	<tr>
     	 <th>Gambar</th>
     	 <th>Produk</th>
     	 <th>Harga</th>
     	 <th>Jumlah</th>
		 <th>Subtotal</th>

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
							<tr></tr>
							<td><input type="checkbox"> Transfer
							</td>
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
`;

export default createAfterCheckoutTemplate;