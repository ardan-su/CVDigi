document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Smooth scroll ke bagian portfolio saat tombol diklik
document.getElementById('viewPortfolio').addEventListener('click', function() {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
});

// Animasi fade-in saat scroll
const sections = document.querySelectorAll(".animate-fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});
