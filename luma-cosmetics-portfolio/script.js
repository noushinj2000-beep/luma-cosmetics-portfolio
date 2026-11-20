(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  const searchToggle = document.querySelector('.search-toggle');
  const searchPanel = document.querySelector('.search-panel');
  const searchInput = document.querySelector('#site-search');
  const closeSearch = document.querySelector('.search-close');
  const products = [...document.querySelectorAll('.product-card')];
  const noResults = document.querySelector('.no-results');
  function setSearch(open) {
    searchPanel.hidden = !open;
    searchToggle.setAttribute('aria-expanded', String(open));
    if (open) searchInput.focus();
    else { searchInput.value = ''; filterProducts(''); }
  }
  searchToggle.addEventListener('click', () => setSearch(searchPanel.hidden));
  closeSearch.addEventListener('click', () => setSearch(false));
  function filterProducts(query) {
    const term = query.trim().toLowerCase();
    let visible = 0;
    products.forEach(card => {
      const match = !term || card.dataset.search.includes(term);
      card.hidden = !match;
      if (match) visible++;
    });
    noResults.hidden = visible !== 0;
  }
  searchInput.addEventListener('input', event => filterProducts(event.target.value));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setSearch(false); });

  let cartCount = 0;
  const cartButton = document.querySelector('.cart-button');
  const countLabel = document.querySelector('.cart-count');
  const toast = document.querySelector('.toast');
  let toastTimer;
  document.querySelectorAll('.add-button').forEach(button => button.addEventListener('click', () => {
    cartCount++;
    countLabel.textContent = cartCount;
    cartButton.setAttribute('aria-label', `Shopping bag, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`);
    toast.textContent = `${button.dataset.product} added to your bag`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
  }));

  const newsletter = document.querySelector('.newsletter-form');
  const message = document.querySelector('.form-message');
  newsletter.addEventListener('submit', event => {
    event.preventDefault();
    const email = newsletter.elements.email;
    if (!email.validity.valid || !email.value.trim()) {
      message.textContent = 'Please enter a valid email address.';
      message.classList.add('error');
      email.focus();
      return;
    }
    message.textContent = 'You’re on the list. Look out for a little note from us.';
    message.classList.remove('error');
    newsletter.reset();
  });
})();
