
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active');
    }

  
  // Toggle sidebar for mobile
  function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('active');
  }

  // Home button and navigation functionality
  document.addEventListener('DOMContentLoaded', function() {
      const navLinks = document.querySelectorAll('.nav-link');
      const contentSections = document.querySelectorAll('.content-section');
      
      // Function to handle navigation
      function navigateToSection(sectionId) {
          // Hide all sections
          contentSections.forEach(section => {
              section.style.display = 'none';
          });
          
          // Show the selected section
          document.getElementById(sectionId).style.display = 'block';
          
          // Update active nav link
          navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.dataset.section === sectionId) {
                  link.classList.add('active');
              }
          });
          
          // Close sidebar on mobile after selection
          if (window.innerWidth <= 768) {
              document.getElementById('sidebar').classList.remove('active');
          }
      }
      
      // Set up event listeners for nav links
      navLinks.forEach(link => {
          link.addEventListener('click', function(e) {
              e.preventDefault();
              const sectionId = this.dataset.section;
              navigateToSection(sectionId);
              
              // Update URL hash
              window.location.hash = sectionId;
          });
      });
      
      // Show home section by default
      navigateToSection('hi and welcome');
      
      // Handle back/forward browser buttons
      window.addEventListener('hashchange', function() {
          const sectionId = window.location.hash.substring(1);
          if (sectionId) {
              navigateToSection(sectionId);
          } else {
              navigateToSection('home');
          }
      });
      // Project modals
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img class="modal-img" src="" alt="">
            <div class="modal-info">
                <h3 class="modal-title"></h3>
                <div class="modal-tags"></div>
                <p class="modal-description"></p>
                <div class="modal-links"></div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Open modal when project card is clicked
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const imgSrc = this.querySelector('.project-img').src;
            const title = this.querySelector('.project-title').textContent;
            const tags = this.querySelector('.project-tags').innerHTML;
            const description = this.querySelector('p').textContent;
            
            modal.querySelector('.modal-img').src = imgSrc;
            modal.querySelector('.modal-title').textContent = title;
            modal.querySelector('.modal-tags').innerHTML = tags;
            modal.querySelector('.modal-description').textContent = description;
            
            // Clone project links
            const linksContainer = this.querySelector('.project-links');
            if (linksContainer) {
                modal.querySelector('.modal-links').innerHTML = linksContainer.innerHTML;
            }
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    modal.querySelector('.close-modal').addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close when clicking outside modal
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
});
