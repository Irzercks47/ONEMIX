class jumbotronBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="jumbotron">
          <div class="jumbotron-content">
              <h1 tabindex="0">Welcome to Dunia Resto Web</h1>
              <p tabindex="0">Dunia Resto Apps merupakan sebuah website atau aplikasi untuk membantu anda mencari informasi terkait Restaurant yang ada di tiap daerah.</p>
          </div>
      </div>
      `;
  }
}

customElements.define('jumbotron-bar', jumbotronBar);
