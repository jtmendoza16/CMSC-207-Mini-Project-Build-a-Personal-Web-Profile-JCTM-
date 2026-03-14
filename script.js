// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        } else {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

function runTypewriter(el) {
    const fullText = (el.dataset.fullText || el.textContent).trim();
    const speed = parseInt(el.dataset.speed || "25", 10);

    el.dataset.fullText = fullText;
    el.textContent = "";
    el.classList.add("is-typing");

    let i = 0;
    const timer = setInterval(() => {
        el.textContent += fullText.charAt(i);
        i += 1;

        if (i >= fullText.length) {
            clearInterval(timer);
            el.classList.remove("is-typing");
            el.classList.add("is-done");
        }
    }, speed);
}

const typingObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            runTypewriter(entry.target);
            obs.unobserve(entry.target); // first time only
        }
    });
}, { threshold: 0.35 });

document.querySelectorAll("p.type-on-view").forEach((p) => {
    typingObserver.observe(p);
});

const funFacts = [
    "I used to be a school model when I was in elementary :D",
    "I am an innovator, champion in Aboitiz Power's innovation for process improvement.",
    "I am a bird lover! I have a cockatiel named Eddie.",
    "Big Ed Sheeran fan."
];

document.querySelectorAll(".fun-fact-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.factTarget;
        const factDisplay = document.getElementById(targetId);

        if (!factDisplay) {
            return;
        }

        let randomIndex = Math.floor(Math.random() * funFacts.length);
        const previousIndex = parseInt(factDisplay.dataset.factIndex || "-1", 10);

        if (funFacts.length > 1) {
            while (randomIndex === previousIndex) {
                randomIndex = Math.floor(Math.random() * funFacts.length);
            }
        }

        factDisplay.dataset.factIndex = String(randomIndex);
        factDisplay.textContent = funFacts[randomIndex];
        factDisplay.classList.add("is-visible");
    });
});

