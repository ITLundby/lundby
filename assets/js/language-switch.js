document.addEventListener('DOMContentLoaded', function () {
    const langToggleButton = document.getElementById('lang-toggle');
    
    // Check local storage for the saved language
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      window.location.href = window.location.pathname + "?lang=" + savedLang;
    }
  
    langToggleButton.addEventListener('click', function () {
      const currentLang = localStorage.getItem('language') || 'en';
      const newLang = currentLang === 'en' ? 'da' : 'en';
      localStorage.setItem('language', newLang);
      window.location.href = window.location.pathname + "?lang=" + newLang;
    });
  });