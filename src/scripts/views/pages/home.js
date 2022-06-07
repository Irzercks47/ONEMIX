const ListResto = {
    async render() {
        return `
            <jumbotron-bar></jumbotron-bar>
            <div class="js_list">
                <h1 class="content-title">Catalogue</h1>
                <div class="cataloguelist js_cataloguelist" id="cataloguelist"></div>
            </div>
        `;
    },

    async afterRender() {
        // const restaurants = await RestaurantDbSource.listRestaurant();
        // const restaurantContainer = document.querySelector('#restaurantlist');
        // restaurants.forEach((restaurant) => {
        //     restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
        // });
    },
};