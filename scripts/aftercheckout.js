import Cart from "../src/scripts/utils/cart";

export const createAfterCheckoutTemplate = (detaillist) => `
     	  <tr>
     	  	  <td><img src ="${detaillist.pictureId}" class="img-keranjang"></td>
     	  	  <td>${detaillist.name}</td>
     	  	  <td>${detaillist.price}</td>
				 <td>
					 <span class="mx-2">1</span>
				 </td>
     	  </tr>
`;

window.addEventListener('load', () => {
	let coll = document.getElementsByClassName('collapsible');
	let i;

	for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		this.classList.toggle('active');
		let content = this.nextElementSibling;
		if (content.style.maxHeight) {
		content.style.maxHeight = null;
		} else {
		content.style.maxHeight = content.scrollHeight + 'px';
		}
	});
	}
        Cart._displayTable();
		Cart._clearProduct();
})
