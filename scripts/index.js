import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/aftercheckout.css';
import '../styles/checkout.css';
import '../src/scripts/component/app-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../src/scripts/component/jumbotron-bar';
import App from '../src/scripts/views/app';
import '../src/scripts/views/pages/aftercheckout-page';
import '../styles/listproduct.css';
const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

// const renderListProductTemplate = (data) => {
//   return `
//           <div class="card_picture">
//               <img class="footwear_picture" src="${data.pictureId}" alt="${data.name}">
//           </div>
//           <div class="card_content">
//               <h2 class="card_content_title"><a href="#">${data.name}</a></h2>
//               <p class="card_content_brand">${data.name}</p>
//               <p class="card_content_price">${data.price}</p>
//           </div>
//       `;
// };

// window.addEventListener('load', () => {
//   fetch('/api/list')
//     .then((res) => res.json())
//     .then((result) => {
//       console.log(result);

//       const listContainer = document.getElementsByClassName('card_item');
//       listContainer.innerHTML = result.map(renderListProductTemplate).join('');
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });
