// Shared Header + Footer for the static pages in public/.
// Usage, where the header / footer should appear:
//   <script src="/site-chrome.js" data-part="header"></script>
//   <script src="/site-chrome.js" data-part="footer"></script>
// Mirror of src/components/Header.tsx and Footer.tsx (styles: /site-chrome.css): keep them in sync.
(function () {
  var script = document.currentScript;
  var part = script.getAttribute('data-part');

  var PHONE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>';
  var E = '<span class="jb-lower">e</span>';

  var HEADER =
    '<header class="jb-header jb-sticky">' +
      '<div class="jb-headerInner">' +
        '<a href="/" aria-label="JBird Bikes home" class="jb-logo">' +
          '<span class="jb-logoWord"><span style="color:#d43a2f">j</span><span>-</span><span style="color:#1f5fc8">b</span><span style="color:#2e8b3e">i</span><span style="color:#d43a2f">r</span><span style="color:#c99700">d</span></span>' +
          '<span class="jb-logoWord"><span style="color:#1f5fc8">b</span><span style="color:#c99700">i</span><span style="color:#b3263a">k</span><span style="color:#2e8b3e">e</span><span style="color:#d43a2f">s</span></span>' +
        '</a>' +
        '<nav aria-label="Primary" class="jb-nav">' +
          '<a href="/sales.html" class="jb-pill jb-pillBuy">Buy</a>' +
          '<a href="/sell" class="jb-pill jb-pillSell">Sell</a>' +
          '<a href="/trade" class="jb-pill jb-pillTrade">Trade</a>' +
          '<a href="/repairs.html" class="jb-pill jb-pillRepair">Repair</a>' +
        '</nav>' +
        '<div class="jb-actions">' +
          '<a href="tel:5045216997" class="jb-call" aria-label="Call us at (504) 521-6997">' + PHONE + 'Call Us</a>' +
          '<button type="button" class="jb-menuButton" aria-label="Open menu" aria-expanded="false" aria-controls="jb-site-menu"><span></span><span></span><span></span></button>' +
        '</div>' +
      '</div>' +
      '<div class="jb-menuOverlay" hidden></div>' +
      '<nav id="jb-site-menu" aria-label="Main" class="jb-menuDrawer" hidden>' +
        '<button type="button" aria-label="Close menu" class="jb-menuClose">✕</button>' +
        '<a href="/sell" class="jb-menuLink">Sell Your ' + E + 'Bike</a>' +
        '<a href="/repairs.html" class="jb-menuLink">Repairs &amp; Services</a>' +
        '<a href="/sales.html" class="jb-menuLink">Rides for Sale</a>' +
        '<a href="/assembly.html" class="jb-menuLink">' + E + 'Bike Assembly</a>' +
        '<a href="/about.html" class="jb-menuLink">About Us</a>' +
        '<a href="/faq" class="jb-menuLink">FAQ</a>' +
        '<a href="tel:5045216997" class="jb-menuPhone">(504) 521-6997</a>' +
      '</nav>' +
    '</header>';

  function social(label, href, bg, icon) {
    return '<a href="' + href + '" target="_blank" rel="noopener noreferrer" aria-label="' + label + '" class="jb-social" style="background:' + bg + '">' +
      '<svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">' + icon + '</svg></a>';
  }

  var FOOTER =
    '<footer class="jb-footer">' +
      '<div class="jb-footerInner">' +
        '<div class="jb-footerGrid">' +
          '<div class="jb-footerCol">' +
            '<h2 class="jb-footerHeading">Contact Us</h2>' +
            '<a href="tel:5045216997" class="jb-footerPhone">(504) 521-6997</a>' +
            '<p class="jb-footerAddress">2336 St. Louis Street<br>New Orleans, LA 70119</p>' +
            '<p class="jb-footerNote">On the Lafitte Greenway</p>' +
          '</div>' +
          '<div class="jb-footerCol">' +
            '<h2 class="jb-footerHeading">Store Hours</h2>' +
            '<dl class="jb-hours"><dt>Mon – Sat:</dt><dd>10:00 AM – 6:00 PM</dd><dt>Sundays:</dt><dd>Closed</dd></dl>' +
          '</div>' +
          '<div class="jb-footerCol">' +
            '<h2 class="jb-footerHeading">Follow Us for Inventory Updates</h2>' +
            '<div class="jb-socials">' +
              social('Facebook', 'https://facebook.com/JBirdBikeShop', '#3b5fa8', '<path fill="#fff" d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8z"/>') +
              social('Instagram', 'https://instagram.com/jbirdbikes', '#c13584', '<path fill="#fff" d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.9-9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 3.6c2.7 0 3 0 4.1.1 2.7.1 4 1.4 4.1 4.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.7-1.4 4-4.1 4.1-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-4-1.4-4.1-4.1C3.7 15 3.7 14.7 3.7 12s0-3 .1-4.1C3.9 5.2 5.2 3.9 7.9 3.8 9 3.7 9.3 3.6 12 3.6zM12 2c-2.7 0-3.1 0-4.2.1C4.2 2.2 2.2 4.2 2.1 7.8 2 8.9 2 9.3 2 12s0 3.1.1 4.2c.1 3.6 2.1 5.6 5.7 5.7 1.1.1 1.5.1 4.2.1s3.1 0 4.2-.1c3.6-.1 5.6-2.1 5.7-5.7.1-1.1.1-1.5.1-4.2s0-3.1-.1-4.2c-.1-3.6-2.1-5.6-5.7-5.7C15.1 2 14.7 2 12 2z"/>') +
              social('Google Business listing', 'https://share.google/16F9rbAFcqQoo17Cq', '#fff',
                '<path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.28 1.45-1.1 2.68-2.33 3.51v2.93h3.78c2.21-2.04 3.57-5.05 3.57-8.68z"/>' +
                '<path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.93l-3.78-2.93c-1.08.72-2.46 1.15-4.15 1.15-3.19 0-5.89-2.15-6.85-5.04H1.25v3.02C3.22 21.17 7.26 24 12 24z"/>' +
                '<path fill="#FBBC05" d="M5.15 14.25A7.2 7.2 0 0 1 4.77 12c0-.78.13-1.54.38-2.25V6.73H1.25A12 12 0 0 0 0 12c0 1.93.46 3.76 1.25 5.27l3.9-3.02z"/>' +
                '<path fill="#EA4335" d="M12 4.71c1.77 0 3.35.61 4.6 1.8l3.45-3.45C17.94 1.14 15.24 0 12 0 7.26 0 3.22 2.83 1.25 6.73l3.9 3.02c.96-2.89 3.66-5.04 6.85-5.04z"/>') +
            '</div>' +
          '</div>' +
          '<div class="jb-footerCol">' +
            '<h2 class="jb-footerHeading">Find Us on Google Maps</h2>' +
            '<div class="jb-map"><iframe title="Map to JBird Bikes" src="https://maps.google.com/maps?q=2336%20St.%20Louis%20St,%20New%20Orleans,%20LA%2070119&amp;z=15&amp;output=embed" loading="lazy"></iframe></div>' +
          '</div>' +
        '</div>' +
        '<nav class="jb-footerNav" aria-label="Policies">' +
          '<a href="/privacy.html">Privacy Policy</a><a href="/terms.html">Terms</a><a href="/return-policy.html">Return Policy</a>' +
        '</nav>' +
        '<p class="jb-copy">© 2026 JBird Bikes. All Rights Reserved.</p>' +
      '</div>' +
    '</footer>';

  if (part === 'footer') {
    script.insertAdjacentHTML('beforebegin', FOOTER);
    return;
  }

  script.insertAdjacentHTML('beforebegin', HEADER);
  var header = script.previousElementSibling;
  var openBtn = header.querySelector('.jb-menuButton');
  var closeBtn = header.querySelector('.jb-menuClose');
  var overlay = header.querySelector('.jb-menuOverlay');
  var drawer = header.querySelector('.jb-menuDrawer');

  function setMenu(open) {
    drawer.hidden = !open;
    overlay.hidden = !open;
    openBtn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) closeBtn.focus();
  }
  openBtn.addEventListener('click', function () { setMenu(true); });
  closeBtn.addEventListener('click', function () { setMenu(false); });
  overlay.addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !drawer.hidden) setMenu(false); });
})();
