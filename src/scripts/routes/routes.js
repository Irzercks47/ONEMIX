import Home from "../views/pages/home";
import DetailPage from "../views/pages/detail";

const routes = {
    '/': Home,
    '/detail/:id': DetailPage,
};

export default routes;