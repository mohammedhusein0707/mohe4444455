// Smooth scrolling for navigation links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert on page load
window.onload = function() {
    alert("Welcome to Mohammed's Car Sale! 🚗");
};