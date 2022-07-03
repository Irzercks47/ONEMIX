import 'regenerator-runtime';
import '../../styles/main.css';
import '../../styles/aftercheckout.css';
import '../../styles/checkout.css';
import './component/app-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './component/jumbotron-bar';
import App from './views/app';
import './views/pages/aftercheckout-page';
import './component/foot-bar';
import Cart from './utils/cart';
import '../../scripts/transaksi';

const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  Cart._onLoadCart();
  Cart._displayCart();
});


