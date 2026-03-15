# Personal Website

This repository contains my personal website for our mini-project in web development.

I made this as a one-page profile about myself. It includes a short intro, some of my hobbies and interests, and my contact details. I also added a few small interactive touches using JavaScript because I wanted the page to feel more alive and not just look like a plain requirement submission.

I am an electrical engineer and currently working as an Asset Health Analytics Engineer, so I wanted the site to show both my professional background and a few personal things about me too.

## What is in the website

- Home section with my name and role
- About Me section with my short background and photo
- Hobbies and Interests section
- Contact section with my links
- Random fun fact button using JavaScript

## Tools used

- HTML
- CSS
- JavaScript

## Features I added

- Navigation menu with working section links
- Hover effects on buttons and images
- Typewriter effect on text
- Scroll animation when sections appear
- Responsive layout for desktop and mobile
- Random fun fact button in the About Me and Hobbies sections

## Core code snippets I used

These are just short snippets from the actual code I used for each feature.

### Navigation menu and smooth scrolling

```html
<nav aria-label="Main navigation">
	<a class="menu-btn" href="#home">Home</a>
	<a class="menu-btn" href="#about">About</a>
	<a class="menu-btn" href="#hobbies">Hobbies</a>
	<a class="menu-btn" href="#contact">Contact</a>
</nav>
```

```js
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
```

### Hover effects

```css
.menu-btn:hover,
.menu-btn:focus-visible {
	background: var(--heading);
	color: #fff;
	transform: translateY(-1px);
	box-shadow: 0 8px 18px rgba(26, 35, 126, 0.2);
}

.about-image img:hover,
.hobby-img-1:hover,
.hobby-img-2:hover {
	transform: translateY(-4px);
	box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
}
```

### Typewriter effect

```html
<p class="tagline type-on-view" data-speed="20">
	Electrical Engineer | Asset Health Analytics Engineer
</p>
```

```js
function runTypewriter(el) {
	const fullText = (el.dataset.fullText || el.textContent).trim();
	const speed = parseInt(el.dataset.speed || "25", 10);

	el.dataset.fullText = fullText;
	el.textContent = "";

	let i = 0;
	const timer = setInterval(() => {
		el.textContent += fullText.charAt(i);
		i += 1;

		if (i >= fullText.length) {
			clearInterval(timer);
		}
	}, speed);
}
```

### Scroll animation

```js
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
	observer.observe(section);
});
```

### Responsive layout

```css
@media (max-width: 768px) {
	.about-content,
	.hobbies-content,
	.contact-content {
		flex-direction: column;
		gap: var(--gap-sm);
	}

	.about-image img,
	.hobby-img-1,
	.hobby-img-2,
	.phone-icon img {
		width: 100%;
		max-width: 320px;
	}
}
```

### Random fun fact button

```html
<button class="fun-fact-btn" type="button" data-fact-target="about-fact">
	Show a Fun Fact
</button>
<p class="fun-fact-display" id="about-fact" aria-live="polite">
	Click the button to reveal a random fun fact.
</p>
```

```js
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
		const randomIndex = Math.floor(Math.random() * funFacts.length);

		factDisplay.textContent = funFacts[randomIndex];
	});
});
```

## Project structure

```text
personal-website/
|-- index.html
|-- script.js
|-- README.md
|-- css/
|   `-- style.css
`-- images/
```

## How to open it

Download or clone the repository, then open `index.html` in any browser.

## A few fun facts about me

- I used to be a school model when I was in elementary
- I became a champion in Aboitiz Power's innovation work for process improvement
- I have a cockatiel named Eddie
- I am a big Ed Sheeran fan

## What I learned from this project

This project helped me practice the basics of HTML, CSS, and JavaScript in a more personal way. I got to apply layout styling, responsiveness, and simple interactions on an actual webpage instead of just reading about them.

One thing I realized while doing this is that even a simple site takes a lot of small adjustments before it feels right. Spacing, text placement, image sizes, and interactions all make a difference.

## Contact

- Email: jadecarlm@gmail.com
- Facebook: https://www.facebook.com/jade.umbrellacorp
- LinkedIn: https://www.linkedin.com/in/jade-carl-mendoza-ree-rme-80196912b/
- Website: https://narrioai.com/
