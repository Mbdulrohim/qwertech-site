import { stories } from '../../data/stories';

export function initStoriesSection(): void {
  const track = document.getElementById('stories-track');
  const storyModal = document.getElementById('story-modal');
  const storyModalClose = document.getElementById('story-modal-close');
  const storyModalBody = document.getElementById('story-modal-body');

  if (!track) return;

  track.innerHTML = stories.map(story => `
    <div class="story-card" data-story-id="${story.id}">
      <img src="${story.image}" alt="${story.title}" class="story-card-thumb" loading="lazy">
      <div class="story-card-body">
        <span class="story-card-tag">${story.tag}</span>
        <h4 class="story-card-title">${story.title}</h4>
        <p class="story-card-desc">${story.desc}</p>
        <span class="story-card-link">
          Read Guide <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
        </span>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();

  track.querySelectorAll<HTMLElement>('.story-card').forEach(card => {
    card.addEventListener('click', () => {
      const storyId = card.dataset.storyId;
      const story = stories.find(s => s.id === storyId);
      if (!story || !storyModalBody) return;

      storyModalBody.innerHTML = `
        <div style="padding: 36px; max-width: 720px; margin: 0 auto;">
          <span style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #0A84FF; margin-bottom: 6px; display: block;">${story.tag} • ${story.readTime}</span>
          <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 18px; line-height: 1.2;">${story.title}</h2>
          <img src="${story.image}" alt="${story.title}" style="width: 100%; max-height: 320px; object-fit: cover; margin-bottom: 24px;">
          <div style="font-size: 0.9375rem; line-height: 1.65; color: var(--color-text-muted); display: flex; flex-direction: column; gap: 14px;">
            ${story.content}
          </div>
        </div>
      `;

      storyModal?.classList.add('is-open');
      document.body.classList.add('no-scroll');
    });
  });

  storyModalClose?.addEventListener('click', () => {
    storyModal?.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });

  storyModal?.addEventListener('click', (e) => {
    if (e.target === storyModal) {
      storyModal?.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  });
}
