// Paste a Stripe Payment Link for each package here to take card payments directly.
// While a link is empty, its button scrolls to the booking form with that package picked.
const PAYMENT_LINKS = {
  spot: "",
  monthly: "",
  presenting: "",
  listing: ""
};

document.getElementById('yr').textContent = new Date().getFullYear();

document.querySelectorAll('[data-pkg]').forEach(btn => {
  const link = PAYMENT_LINKS[btn.dataset.pkg];
  if (link) {
    btn.href = link;
    return;
  }
  btn.addEventListener('click', () => {
    document.getElementById('sp-package').value = btn.dataset.pkg;
  });
});
