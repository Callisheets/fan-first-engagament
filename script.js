function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
}

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.querySelector('.form-submit').addEventListener('click', function () {
  const original = 'Send Message →';
  this.textContent = '✓ Message Sent!';
  this.style.background = '#16a34a';
  setTimeout(() => {
    this.textContent = original;
    this.style.background = '';
  }, 3000);
});