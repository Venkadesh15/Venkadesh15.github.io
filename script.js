// Typewriter
const phrases = [
  'Machine Learning',
  'Deep Learning',
  'Data Visualization',
  'Model Deployment',
  'SQL & Python'
];
const typeEl = document.getElementById('typewriter');
let p = 0, i = 0, deleting = false;
function tick(){
  const current = phrases[p];
  if(!deleting){
    typeEl.textContent = current.slice(0, ++i);
    if(i === current.length){ deleting = true; setTimeout(tick, 900); return; }
  } else {
    typeEl.textContent = current.slice(0, --i);
    if(i === 0){ deleting = false; p = (p+1) % phrases.length; }
  }
  setTimeout(tick, deleting ? 50 : 90);
}
document.addEventListener('DOMContentLoaded', tick);

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Sidebar active state on scroll
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.side-nav .nav-link');

function onScroll(){
  const y = window.scrollY;
  sections.forEach(section=>{
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    if(y >= top && y <= bottom){
      navLinks.forEach(l=>l.classList.remove('active'));
      const active = document.querySelector(`.side-nav .nav-link[href="#${id}"]`);
      if(active) active.classList.add('active');
    }
  });
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// Contact form (mailto)
const form = document.getElementById('contactForm');
const notice = document.getElementById('formNotice');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  if(!name || !email || !msg){
    notice.textContent = 'Please complete all fields.';
    return;
  }
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
  window.location.href = `mailto:collegevenkadesh@gmail.com?subject=${subject}&body=${body}`;
  notice.textContent = 'Opening your email client...';
});

// set years
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('yearFooter').textContent = new Date().getFullYear();
