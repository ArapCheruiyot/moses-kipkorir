// scripts.js

// Function to handle showing and hiding sections
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Get the target section from the href
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });

            // Show the target section
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});
