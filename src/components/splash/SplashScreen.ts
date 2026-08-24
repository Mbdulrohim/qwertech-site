export function initSplashScreen(): void {
  const splashEl = document.getElementById('splash-screen');
  if (!splashEl) return;

  const hideSplash = (): void => {
    splashEl.classList.add('is-hidden');
    setTimeout(() => {
      splashEl.style.display = 'none';
    }, 600);
  };

  // Give a 1.4s elegant display then reveal the site
  setTimeout(hideSplash, 1400);

  // Fallback click to skip immediately
  splashEl.addEventListener('click', hideSplash);
}
