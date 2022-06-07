class appBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">ONEMIX</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <div class="navbar-nav">
                <a class="nav-link" href="#">Product</a>
                <a class="nav-link" href="#">
                  <ion-icon name="cart-outline"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-bar', appBar);
