export function initFooter(): void {
  document.querySelectorAll<HTMLElement>('.footer-col-title').forEach(title => {
    title.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        const parent = title.closest('.footer-col');
        parent?.classList.toggle('is-open');
      }
    });
  });
}
