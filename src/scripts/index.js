import 'regenerator-runtime';
import '../styles/main.css';
import './component/app-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './component/jumbotron-bar';
import App from './views/app';

const app = new App({
    content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

