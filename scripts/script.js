document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default link behavior
  
      // Remove 'active-nav' class from all nav links
      document.querySelectorAll('.nav-link').forEach(nav => {
        nav.classList.remove('active-nav');
      });
  
      // Add 'active-nav' class to the clicked link
      this.classList.add('active-nav');
  
      // Hide all sections by adding 'sect-hide' and removing 'sect-show'
      document.querySelectorAll('.content > div').forEach(section => {
        section.classList.add('sect-hide');
        section.classList.remove('sect-show');
      });
  
      // Determine the corresponding section class to show
      let sectionClass;
      if (this.classList.contains('home-link')) {
        sectionClass = 'home';
      } else if (this.classList.contains('about-link')) {
        sectionClass = 'about';
      } else if (this.classList.contains('services-link')) {
        sectionClass = 'services';
      } else if (this.classList.contains('contact-link')) {
        sectionClass = 'contact';
      }
  
      // Show the corresponding section
      const sectionToShow = document.querySelector(`.${sectionClass}`);
      if (sectionToShow) {
        sectionToShow.classList.add('sect-show');
        sectionToShow.classList.remove('sect-hide');
      } else {
        console.error('No matching section found for class:', sectionClass);
      }
    });
  });
  