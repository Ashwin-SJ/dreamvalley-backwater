
// ── SLIDER ──
const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('sliderDots');
let current = 0, total = 5, timer;

for(let i=0;i<total;i++){
  const d = document.createElement('div');
  d.className = 'dot' + (i===0?' active':'');
  d.addEventListener('click', ()=>goTo(i));
  dotsContainer.appendChild(d);
}

function goTo(n){
  current = (n+total)%total;
  slider.style.transform = `translateX(-${current*20}%)`;
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===current));
  resetTimer();
}

function resetTimer(){ clearInterval(timer); timer=setInterval(()=>goTo(current+1),4800); }
document.getElementById('nextSlide').addEventListener('click',()=>goTo(current+1));
document.getElementById('prevSlide').addEventListener('click',()=>goTo(current-1));
resetTimer();

// ── NAV SCROLL ──
const nav = document.getElementById('navbar');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>60));

// ── HAMBURGER ──
const ham = document.getElementById('hamburger');
const links = document.getElementById('navLinks');
ham.addEventListener('click',()=>{ ham.classList.toggle('open'); links.classList.toggle('open'); });
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ ham.classList.remove('open'); links.classList.remove('open'); }));

// ── SCROLL REVEAL ──
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
