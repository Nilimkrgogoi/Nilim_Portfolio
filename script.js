// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================

// ---------- Typing Effect ----------

const words = [
    "Python Developer",
    "Full Stack Developer",
    "Data Analyst",
    "Open to Freelance Work"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// ---------- Dark Mode ----------

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            themeBtn.classList.remove("fa-moon");
            themeBtn.classList.add("fa-sun");

        } else {

            themeBtn.classList.remove("fa-sun");
            themeBtn.classList.add("fa-moon");

        }

    });

}


// ---------- Mobile Menu ----------

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("show");

    });

}


// ---------- Scroll Progress & Top Button ----------

const progressBar = document.getElementById("progress-bar");
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop / scrollHeight) * 100;

    if (progressBar) {

        progressBar.style.width = percent + "%";

    }

    if (topBtn) {

        if (scrollTop > 400) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    }

});
window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop / scrollHeight) * 100;

    if (progressBar) {

        progressBar.style.width = percent + "%";

    }

    if (topBtn) {

        if (scrollTop > 400) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    }

});

// ---------- Scroll To Top ----------

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


// ---------- Counter ----------

function counter(id, end, speed) {

    const element = document.getElementById(id);

    if (!element) return;

    let count = 0;

    const timer = setInterval(() => {

        count++;

        element.textContent = count + "+";

        if (count >= end) {

            clearInterval(timer);

        }

    }, speed);

}

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats || counterStarted) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counter("projectCount", 10, 100);
        counter("clientCount", 5, 200);
        counter("skillCount", 15, 80);
        counter("experienceCount", 3, 350);

    }

});


// ---------- Reveal Animation ----------

const revealElements = document.querySelectorAll(

    ".skill-card, .project-card, .certificate-card, .timeline-content, .contact-card"

);

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},

{

threshold: 0.2

}

);

revealElements.forEach(element => {

element.style.opacity = "0";

element.style.transform = "translateY(50px)";

element.style.transition = "all 0.8s ease";

observer.observe(element);

});


// ---------- Contact Form ----------

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

contactForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been sent.");

contactForm.reset();

});

}