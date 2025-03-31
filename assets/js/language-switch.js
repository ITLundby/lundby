document.addEventListener('DOMContentLoaded', function () {
  const languageToggleButton = document.getElementById('language-toggle');
  const languageFlag = document.getElementById('language-flag');

  // Check local storage for the saved language
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    updateFlagIcon(savedLanguage);
  } else {
    // Default to English if no language is saved
    localStorage.setItem('language', 'en');
    updateFlagIcon('en');
  }

  // Toggle language when the button is clicked
  languageToggleButton.addEventListener('click', function () {
    const currentLanguage = localStorage.getItem('language');
    if (currentLanguage === 'en') {
      localStorage.setItem('language', 'da');
      updateFlagIcon('da');
    } else {
      localStorage.setItem('language', 'en');
      updateFlagIcon('en');
    }
  });

  // Update the flag and text based on the language
  function updateFlagIcon(language) {
    if (language === 'da') {
      languageFlag.classList.remove('fa-flag-uk');
      languageFlag.classList.add('fa-flag-dk');
    } else {
      languageFlag.classList.remove('fa-flag-dk');
      languageFlag.classList.add('fa-flag-uk');
    }}
  });