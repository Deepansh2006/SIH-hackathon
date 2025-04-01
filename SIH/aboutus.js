// Scroll to "More Info" section with smooth scrolling
function scrollToMore() {
    document.getElementById('more-info').scrollIntoView({ behavior: 'smooth' });
}

// Animations trigger when page loads
window.addEventListener('load', () => {
    document.querySelectorAll('.animate-text').forEach((el) => {
        el.style.animationDelay = `${Math.random() * 0.5}s`;
    });

    document.querySelector('.animate-button').style.animationDelay = '1s';
    document.querySelector('.animate-image').style.animationDelay = '1.5s';
});
