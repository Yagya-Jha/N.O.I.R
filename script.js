/**
 * Simple Page Router
 */
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(pageId + '-page').classList.add('active');
    document.getElementById('nav-' + pageId).classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Parallax Star Effect
 * Moves the stars container based on mouse position
 */
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelector('.stars-overlay');
    if (!stars) return;

    const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.05;

    stars.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

console.log("NOIR: Interface and Starfield active.");