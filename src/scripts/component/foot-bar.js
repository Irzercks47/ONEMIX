class footBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        
            <footer class="footer-dark">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-4 col-md-4 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="https://github.com/MAditP11" rel="noreferrer">M. Adit Prinansyah</a></li>
                                <li><a href="https://github.com/Irzercks47" rel="noreferrer">Muhammad Irza A D</a></li>
                                <li><a href="https://github.com/hanifann55" rel="noreferrer">Ahmad Hanif M</a></li>
                                <li><a href="https://github.com/DaffaKresna" rel="noreferrer">Daffa Kresna W</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 item text">
                            <img class="img-fluid" src="https://iili.io/jIrUjS.png">
                        </div>
                    </div>
                    <p class="copyright">ONEMIX © 2022</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('foot-bar', footBar);
