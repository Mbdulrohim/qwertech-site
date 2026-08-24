export function initDealsSection(): void {
  const dealsTabs = document.querySelectorAll<HTMLElement>('.deals-tab-btn');
  dealsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dealsTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetType = tab.dataset.dealType;
      
      const dealCards = document.querySelectorAll<HTMLElement>('#grid-deals-products .product-card');
      dealCards.forEach(card => {
        if (targetType === 'all' || card.dataset.dealType === targetType) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
