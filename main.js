

// Menú hamburguesa con animación + accesibilidad
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('navLinks');

function closeMenu() {
  hamburger.classList.remove('is-open');
  navLinks.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Abrir menú');
}

function openMenu() {
  hamburger.classList.add('is-open');
  navLinks.classList.add('is-open');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Cerrar menú');
}

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.contains('is-open');
  if (isOpen) closeMenu(); else openMenu();
});

// Cierra el menú al navegar a una sección (en mobile)
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 760) closeMenu();
  });
});

// Validación simple del formulario de contacto
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

function showError(inputId, message) {
  const small = document.querySelector(`.error[data-for="${inputId}"]`);
  if (small) small.textContent = message || '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let ok = true;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  showError('name', '');
  showError('email', '');
  showError('message', '');
  statusEl.textContent = '';

  if (!name) { showError('name', 'Ingresa tu nombre.'); ok = false; }
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) { showError('email', 'Email inválido.'); ok = false; }
  if (!message) { showError('message', 'Escribe un mensaje.'); ok = false; }

  if (!ok) return;

  // Simulación de envío
  statusEl.textContent = '¡Gracias! Tu mensaje fue enviado correctamente.';
  form.reset();
});

// Mejor UX: cerrar el menú si se expande y se redimensiona a desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    navLinks.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menú');
  }
});
