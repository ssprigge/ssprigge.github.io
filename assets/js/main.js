document.addEventListener('DOMContentLoaded', () => {
    // Add intersection observer for fade-in animations
    const sections = document.querySelectorAll('.section');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeInObserver.observe(section);
    });

    // Add hover effect for achievement items
    const achievements = document.querySelectorAll('.achievements li');
    achievements.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const arrow = item.querySelector('::before');
            if (arrow) {
                arrow.style.color = 'var(--text-color)';
            }
        });
    });

    // Add typing effect to main title
    const title = document.querySelector('h1');
    const text = title.textContent;
    title.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);

    // Add scroll-to-top functionality
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Create scroll-to-top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-top';
    scrollButton.style.display = 'none';
    scrollButton.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollButton);

    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Add metrics counter animation
    const metrics = document.querySelectorAll('.metric-number');
    metrics.forEach(metric => {
        const target = parseInt(metric.textContent);
        let current = 0;
        const increment = target / 50; // Adjust for animation speed
        const animator = setInterval(() => {
            current += increment;
            if (current >= target) {
                metric.textContent = target;
                clearInterval(animator);
            } else {
                metric.textContent = Math.round(current);
            }
        }, 20);
    });
});
