// Sort projects
function sortProjects(sortBy) {
    const grid = document.querySelector('.projects-grid');
    const projects = Array.from(document.querySelectorAll('.project-card'));
    
    projects.sort((a, b) => {
        if (sortBy === 'date') {
            // Assuming you have data-date attributes on projects
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return dateB - dateA;
        } else if (sortBy === 'name') {
            const nameA = a.querySelector('.project-title').textContent.toLowerCase();
            const nameB = b.querySelector('.project-title').textContent.toLowerCase();
            return nameA.localeCompare(nameB);
        }
    });
    
    // Re-append sorted projects
    projects.forEach(project => grid.appendChild(project));
}

// Add to your filter buttons HTML:
// <button onclick="sortProjects('date')">Sort by Date</button>
// <button onclick="sortProjects('name')">Sort by Name</button>