// Selvi GSM Ana JS
// Google Fonts yüklemesi
document.addEventListener('DOMContentLoaded', function() {
  // Dark mode toggle
  const toggle = document.getElementById('dark-toggle');
  if (toggle) {
    toggle.addEventListener('click', function() {
      document.documentElement.toggleAttribute('data-theme', 'dark');
      if(document.documentElement.hasAttribute('data-theme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.removeItem('theme');
      }
    });
    // Load theme from storage
    if(localStorage.getItem('theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  // Slider otomatik kaydırma
  const sliderTrack = document.querySelector('.slider-track');
  if (sliderTrack) {
    let scrollAmount = 0;
    setInterval(() => {
      scrollAmount += 1;
      sliderTrack.scrollLeft = scrollAmount;
      if (scrollAmount >= sliderTrack.scrollWidth / 2) {
        scrollAmount = 0;
      }
    }, 30);
  }

  // Bildirim placeholder
  const notifyBtn = document.getElementById('notify-btn');
  if (notifyBtn) {
    notifyBtn.addEventListener('click', function() {
      alert('Bildirim sistemi yakında aktif olacak!');
    });
  }
});