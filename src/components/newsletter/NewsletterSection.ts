export function initNewsletterSection(): void {
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterMsg = document.getElementById('newsletter-msg');

  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletter-email') as HTMLInputElement | null;
    if (input && input.value && newsletterMsg) {
      newsletterMsg.style.display = 'block';
      newsletterMsg.innerHTML = `<span style="color: #0A84FF; font-weight: 500;">✓ Subscribed! You will receive daily flash deals & iPhone 18 VIP launch alerts at ${input.value}.</span>`;
      input.value = '';
    }
  });
}
