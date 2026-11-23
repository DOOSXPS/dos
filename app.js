// Lightweight demo UI interactions. Exploit actions intentionally aren't wired.
const cards=[...document.querySelectorAll('.game-card')];
const featured=document.getElementById('featured');
const title=document.getElementById('gameTitle');
const subtitle=document.getElementById('gameSubtitle');
for(const card of cards){card.addEventListener('click',()=>{
  cards.forEach(c=>c.classList.remove('active'));card.classList.add('active');
  title.textContent=card.dataset.title;subtitle.textContent=card.dataset.sub;
  featured.className='featured '+card.dataset.art;
});}
