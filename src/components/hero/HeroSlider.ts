export function initHeroSlider(): void {
  const slides = document.querySelectorAll<HTMLElement>('.hero-slide');
  const dots = document.querySelectorAll<HTMLElement>('.hero-dot');
  if (slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval: number | null = null;

  function showSlide(index: number): void {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide(): void {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function startAutoPlay(): void {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, 5500);
  }

  function stopAutoPlay(): void {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index || '0', 10);
      showSlide(idx);
      startAutoPlay();
    });
  });

  const heroSection = document.querySelector('.hero-slider-section');
  heroSection?.addEventListener('mouseenter', stopAutoPlay);
  heroSection?.addEventListener('mouseleave', startAutoPlay);

  startAutoPlay();
}
