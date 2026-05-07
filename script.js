const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  mobileMenu.hidden = expanded;
});

document.querySelectorAll('#mobile-menu a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const lapsed = document.getElementById('lapsed');
const visit = document.getElementById('visit');
const rate = document.getElementById('rate');
const out = {
  rebooked: document.getElementById('rebooked'),
  revenue: document.getElementById('revenue'),
  net: document.getElementById('net'),
  breakeven: document.getElementById('breakeven')
};
const usd = n => `$${Math.round(n).toLocaleString()}`;
function calc() {
  const lp = Number(lapsed.value) || 0;
  const av = Number(visit.value) || 0;
  const rr = (Number(rate.value) || 0) / 100;
  const rebooked = lp * rr;
  const revenue = rebooked * av;
  const net = revenue - 1500;
  const breakeven = Math.ceil(1500 / Math.max(av, 1));
  out.rebooked.textContent = rebooked.toFixed(1).replace('.0','');
  out.revenue.textContent = usd(revenue);
  out.net.textContent = usd(net);
  out.breakeven.textContent = breakeven;
}
[lapsed, visit, rate].forEach(i => i?.addEventListener('input', calc));
calc();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
