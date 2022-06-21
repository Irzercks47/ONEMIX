const createDetailCardTemplate = (item) => `
    <div class="detail-item row">
        <div class="image col">
            <img src="../public/images/heros/heros.jpg" alt="test" class="img-fluid float-start rounded">
        </div>
        <div class="item-info container col">
            <h2>Nama Barang</h2>
            <hr>
            <h3>Nama Brand</h3>
            <div class="item-price">
                <p>Harga :</p>
                <div class="price-container">
                    <p>Rp. ?????</p>
                </div>
            </div>
            <!-- <div class="item-color">
                <p>Warna :</p>
                <div class="color-container">
                    <div class="color">
                        <p>Merah</p>
                    </div>
                    <div class="color">
                        <p>Biru</p>
                    </div>
                </div>
            </div> -->
            <div class="item-desc">
                <p>Deskripsi :</p>
                <div class="desc-container">
                    <p>Barang jelek</p>
                </div>
            </div>
            <button type="button" class="btn btn-outline-dark">add to cart</button>
        </div>
    </div>
`;