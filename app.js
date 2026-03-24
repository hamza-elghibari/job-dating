    AOS.init();

    // menu
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("mobile-menu");
    btn.onclick = () => menu.classList.toggle("hidden");

    // countdown
    const countdown = () => {
      const target = new Date("April 14, 2026 09:00:00").getTime();
      const now = new Date().getTime();
      const diff = target - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      document.getElementById("countdown").innerHTML = `${days}j ${hours}h`;
    };
    setInterval(countdown, 1000);
    const faqBtns = document.querySelectorAll('.faq-btn');
    faqBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          btn.querySelector('span').textContent = '+';
        } else {
          document.querySelectorAll('.faq-content').forEach(c => c.style.maxHeight = null);
          document.querySelectorAll('.faq-btn span').forEach(s => s.textContent = '+');

          content.style.maxHeight = content.scrollHeight + 'px';
          btn.querySelector('span').textContent = '-';
        }
      });
    });
