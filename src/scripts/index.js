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
const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
