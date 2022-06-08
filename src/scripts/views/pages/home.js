const Home = {
    async render() {
        return `
            <div class="js_list">
                <h1 class="content-title">Catalogue</h1>
                <div class="cataloguelist js_cataloguelist" id="cataloguelist"></div>
            </div>
        `;
    },

    async afterRender() {
        //smthng
    },
};

export default Home;