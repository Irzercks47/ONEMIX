class jumbotronBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="jumbotron" id = "jumbotron" >   
            <div class="body">
                <h1 class="title">ONEMIX</h1>
                <p class="text">Number 1 website for local footwear .</p>
            </div>
        </section>
      `;
  }
}

customElements.define('jumbotron-bar', jumbotronBar);
