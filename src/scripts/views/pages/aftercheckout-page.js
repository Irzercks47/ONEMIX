const AfterCheckoutPage = {
    async render() {
        return `
            <div class="content">
                <h1 class="content-title">Detail Transaksi Belanjaanmu</h1>
                <div class="aftercheckoutlist" id="aftercheckoutlist"></div>
            </div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { restaurant } = await RestaurantDbSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#aftercheckoutlist');
        const mainContainer = document.querySelector('#jumbotron');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
        mainContainer.style.display = 'none';

    },
};

export default AfterCheckoutPage;