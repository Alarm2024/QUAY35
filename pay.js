/* QUAY checkout. The product buttons pay with PayPal directly; each href is in
   index.html so it works without JavaScript. Stripe stays wired but switched
   off, and even when on it never replaces a PayPal link. */
(function () {
  'use strict';
  var STRIPE_ENABLED = false;
  var STRIPE_PAY = {
    'quay-land': ['https://buy.stripe.com/4gM9ANffhbWRd2g4UR3Ru04', 'Stripe Land $149'],
    'flex-card-pack': ['https://buy.stripe.com/9B6bIV1orgd7e6kbjf3Ru05', 'Stripe · Flex $29'],
    'score-report': ['https://buy.stripe.com/fZu28l8QT9OJ4vKfzv3Ru06', 'Stripe · Score $49'],
    'node-watch': ['https://buy.stripe.com/14A4gt3wze4Z3rGevr3Ru07', 'Stripe · Watch $79']
  };
  if (!STRIPE_ENABLED) return;
  var links = document.querySelectorAll('a[data-product]');
  for (var i = 0; i < links.length; i++) {
    if (/^https:\/\/www\.paypal\.com\//.test(links[i].getAttribute('href') || '')) continue;
    var s = STRIPE_PAY[links[i].getAttribute('data-product')];
    if (s) {
      links[i].href = s[0];
      links[i].textContent = s[1];
      links[i].removeAttribute('aria-label');
    }
  }
})();
