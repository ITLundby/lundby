document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
  
    // Check local storage for the saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.add(savedTheme);
    } else {
      // Default to the system preference
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkMediaQuery.matches) {
        body.classList.add('dark');
      } else {
        body.classList.add('light');
      }
    }
  
    // Update the theme when the button is clicked
    themeToggleButton.addEventListener('click', function () {
      if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateIcon('dark');
      } else {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
        updateIcon('light');
      }
    });
  
    // Listen for changes to the system preference
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkMediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          body.classList.remove('light');
          body.classList.add('dark');
        } else {
          body.classList.remove('dark');
          body.classList.add('light');
        }
      }
    });

    // Function to update theme icon
    // Function to update the icon based on the theme
    function updateIcon(theme) {
      if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      }
    }
  });