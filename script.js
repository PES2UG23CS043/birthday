// Ensure the story always begins at the first page when the site is opened
window.addEventListener('DOMContentLoaded', () => {
  try {
    if (location.hash !== '#page-1') {
      history.replaceState(null, '', location.pathname + '#page-1');
    }
    const start = document.querySelector('#page-1');
    if (start) requestAnimationFrame(() => start.scrollIntoView({ behavior: 'instant', block: 'start' }));
  } catch (e) {
    // ignore
  }
});

document.querySelectorAll('.next-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const targetId = button.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) {
      return;
    }

    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
