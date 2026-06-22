document.addEventListener('DOMContentLoaded', () => {
  // --- Dark Mode Logic ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // Check for saved preference, otherwise check system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark-mode');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '☀️';
  } else {
    if (themeToggleBtn) themeToggleBtn.innerHTML = '🌙';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      themeToggleBtn.innerHTML = isDark ? '☀️' : '🌙';
    });
  }

  // --- Active Nav Link Logic ---
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    // Basic match check (handles index.html or root as well)
    const linkPath = link.getAttribute('href');
    if (currentPath.endsWith(linkPath) || (currentPath.endsWith('/') && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
