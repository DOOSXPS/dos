const cards = [...document.querySelectorAll('.game-card')];
const featured = document.getElementById('featured');
const title = document.getElementById('gameTitle');
const subtitle = document.getElementById('gameSubtitle');

for (const card of cards) {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    title.textContent = card.dataset.title;
    subtitle.textContent = card.dataset.sub;
    featured.className = 'featured ' + card.dataset.art;
  });
}

const softButton = document.getElementById('soft1402');
const viewer = document.getElementById('hostViewer');
const main = document.querySelector('.layout');
const footer = document.querySelector('.footer');
const frame = document.getElementById('hostFrame');
const backButton = document.getElementById('backButton');

if (softButton && viewer && main && frame && backButton) {
  softButton.addEventListener('click', () => {
    frame.src = 'https://webkitty.arabpixel.net/';
    main.hidden = true;
    if (footer) footer.hidden = true;
    viewer.hidden = false;
    window.scrollTo(0, 0);
  });

  backButton.addEventListener('click', () => {
    frame.src = 'about:blank';
    viewer.hidden = true;
    main.hidden = false;
    if (footer) footer.hidden = false;
    window.scrollTo(0, 0);
  });
}
