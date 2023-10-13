const template = document.createElement('template');

template.innerHTML = `
<footer><section class="inner">
  <section upper>
  
    <section>
      <h2>Get in touch</h2>
      <ul>
        <li><a href="tel:+441613066000">+44 (0) 161 306 6000</a></li>
        <li><a href="https://forms.library.manchester.ac.uk/public/form/5da5c2038bf1c25d48cd693c">Contact us online</a></li>
      </ul>
    </section>

    <section>
      <h2>Find us</h2>
      <address><a href="https://www.manchester.ac.uk/discover/maps/interactive-map/">The University of Manchester<br>Oxford Rd<br>Manchester<br>M13 9PL<br>UK</a></address>
    </section>

    <section connect>
      <h2>Connect with us</h2>
      <ul class="social">
        <li>
          <a href="https://www.facebook.com/TheUniversityOfManchester" class="socialMediaLinks" onclick="var href = this.href; ga('send', 'event', 'Social media link (footer)', 'Open', href, { 'hitCallback': function() { document.location = href; } }); return false;">
            <img class="lazy" src="//assets.manchester.ac.uk/phase1/templates/images/icon-facebook-50.png" data-original="//assets.manchester.ac.uk/phase1/templates/images/icon-facebook-50.png" alt="Facebook page for The University of Manchester" style="display: inline;">
          </a>
        </li>
        <li>
          <a href="https://twitter.com/OfficialUoM" class="socialMediaLinks" onclick="var href = this.href; ga('send', 'event', 'Social media link (footer)', 'Open', href, { 'hitCallback': function() { document.location = href; } }); return false;">
            <img class="lazy" src="//assets.manchester.ac.uk/phase1/templates/images/icon-twitter-50.png" data-original="//assets.manchester.ac.uk/phase1/templates/images/icon-twitter-50.png" alt="Twitter page for The University of Manchester" style="display: inline;">
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/universitymanchester" class="socialMediaLinks" onclick="var href = this.href; ga('send', 'event', 'Social media link (footer)', 'Open', href, { 'hitCallback': function() { document.location = href; } }); return false;">
            <img class="lazy" src="//assets.manchester.ac.uk/phase1/templates/images/icon-youtube-50.png" data-original="//assets.manchester.ac.uk/phase1/templates/images/icon-youtube-50.png" alt="YouTube page for The University of Manchester" style="display: inline;">
          </a>
        </li>
        <li>
          <a href="https://instagram.com/officialuom/" class="socialMediaLinks" onclick="var href = this.href; ga('send', 'event', 'Social media link (footer)', 'Open', href, { 'hitCallback': function() { document.location = href; } }); return false;">
            <img class="lazy" src="//assets.manchester.ac.uk/phase1/templates/images/icon-instagram-50.svg" data-original="//assets.manchester.ac.uk/phase1/templates/images/icon-instagram-50.svg" alt="Instagram page for The University of Manchester" style="display: inline;">
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/school/university-of-manchester/" class="socialMediaLinks" onclick="var href = this.href; ga('send', 'event', 'Social media link (footer)', 'Open', href, { 'hitCallback': function() { document.location = href; } }); return false;">
            <img class="lazy" src="https://libapps.manchester.ac.uk/assets/mdc/image/linkedin.png" alt="LinkedIn page for The University of Manchester" style="display: inline;">
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h2>Our partners</h2>
      <p>Manchester Digital Collections is built in collaboration with Cambridge University Libraries.</p>
      <a href="https://cudl.lib.cam.ac.uk/"><img camlogo alt="Cambridge University Libraries logo" src="https://libapps.manchester.ac.uk/assets/mdc/image/uoc.png"></a>
    </section>
  </section>
  <hr>
  <section lower>
    <p>
      <a href="https://www.manchester.ac.uk/disclaimer/">Disclaimer</a>
      <a href="https://www.manchester.ac.uk/discover/privacy-information/data-protection/">Data protection</a>
      <a href="https://www.manchester.ac.uk/copyright/">Copyright notice</a>
      <a href="https://www.library.manchester.ac.uk/accessibility/">Web accessibility</a>
      <a href="https://www.manchester.ac.uk/discover/privacy-information/freedom-information/">Freedom of information</a>
      <a href="https://www.manchester.ac.uk/discover/governance/charitable-status/">Charitable status</a>
      <span>Royal charter number: RC000797</span>
    </p>
  </section>
</section></footer>
`

class Footer extends HTMLElement {
  constructor() {
    super();
    /*
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    */
  }

  connectedCallback() {
    this.innerHTML = template.innerHTML;
  }
}

window.customElements.define('cdcp-footer', Footer);