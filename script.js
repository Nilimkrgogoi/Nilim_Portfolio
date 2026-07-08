// =======================================
// PORTFOLIO V3 - SCRIPT.JS (PART 1)
// =======================================

// -----------------------------
// AOS Animation
// -----------------------------

AOS.init({
    duration: 1000,
    once: true,
    offset: 80
});

// -----------------------------
// Loading Screen
// -----------------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// -----------------------------
// Typing Effect
// -----------------------------

const words = [

    "Full Stack Developer",
    "Python Developer",
    "Data Analyst",
    "Freelancer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// -----------------------------
// Dark / Light Mode
// -----------------------------

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

// -----------------------------
// Scroll Progress Bar
// -----------------------------

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const percent = (scrollTop / height) * 100;

    if (progressBar) {

        progressBar.style.width = percent + "%";

    }

});
// =======================================
// PORTFOLIO V3 - SCRIPT.JS (PART 2)
// =======================================

// -----------------------------
// Mobile Menu
// -----------------------------

const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbar.classList.contains("show")) {

            const bsCollapse = bootstrap.Collapse.getInstance(navbar);

            if (bsCollapse) {

                bsCollapse.hide();

            }

        }

    });

});

// -----------------------------
// Scroll To Top Button
// -----------------------------

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

// -----------------------------
// Animated Counter
// -----------------------------

let counterStarted = false;

function animateCounter(id,target){

    const element = document.getElementById(id);

    if(!element) return;

    let value = 0;

    const speed = Math.max(20, Math.floor(1500 / target));

    const timer = setInterval(()=>{

        value++;

        element.textContent = value + "+";

        if(value >= target){

            clearInterval(timer);

        }

    },speed);

}

function startCounters(){

    if(counterStarted) return;

    const stats = document.querySelector(".stats");

    if(!stats) return;

    const position = stats.getBoundingClientRect().top;

    if(position < window.innerHeight - 120){

        counterStarted = true;

        animateCounter("projectCount",10);
        animateCounter("clientCount",8);
        animateCounter("skillCount",15);
        animateCounter("experienceCount",5);

    }

}

window.addEventListener("scroll",startCounters);

// -----------------------------
// Active Navbar Link
// -----------------------------

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// -----------------------------
// Smooth Button Hover
// -----------------------------

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});
// =======================================
// PORTFOLIO V3 - SCRIPT.JS (PART 3)
// =======================================

// -----------------------------
// Reveal Animation
// -----------------------------

const revealElements = document.querySelectorAll(

    ".info-card,.skill-card,.service-card,.project-card,.timeline-item,.certificate-card,.achievement-card,.contact-card"
    
    );
    
    const revealObserver = new IntersectionObserver(
    
    (entries)=>{
    
    entries.forEach(entry=>{
    
    if(entry.isIntersecting){
    
    entry.target.classList.add("show");
    
    }
    
    });
    
    },
    
    {
    
    threshold:0.15
    
    }
    
    );
    
    revealElements.forEach(item=>{
    
    item.classList.add("hidden");
    
    revealObserver.observe(item);
    
    });
    
    // -----------------------------
    // Save Theme
    // -----------------------------
    
    const savedTheme = localStorage.getItem("theme");
    
    if(savedTheme==="light"){
    
    document.body.classList.add("light");
    
    if(themeBtn){
    
    themeBtn.classList.remove("fa-moon");
    
    themeBtn.classList.add("fa-sun");
    
    }
    
    }
    
    if(themeBtn){
    
    themeBtn.addEventListener("click",()=>{
    
    if(document.body.classList.contains("light")){
    
    localStorage.setItem("theme","light");
    
    }else{
    
    localStorage.setItem("theme","dark");
    
    }
    
    });
    
    }
    
    // -----------------------------
    // Contact Form
    // -----------------------------
    
    const form=document.querySelector(".contact-form");
    
    if(form){
    
    form.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    const name=form.querySelector("input[type='text']");
    
    const email=form.querySelector("input[type='email']");
    
    if(name.value.trim()===""){
    
    alert("Please enter your name.");
    
    name.focus();
    
    return;
    
    }
    
    if(email.value.trim()===""){
    
    alert("Please enter your email.");
    
    email.focus();
    
    return;
    
    }
    
    alert("Thank you! Your message has been sent successfully.");
    
    form.reset();
    
    });
    
    }
    
    // -----------------------------
    // Navbar Shadow
    // -----------------------------
    
    const nav=document.querySelector(".navbar");
    
    window.addEventListener("scroll",()=>{
    
    if(window.scrollY>60){
    
    nav.style.background="rgba(15,23,42,.92)";
    
    nav.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";
    
    }else{
    
    nav.style.background="rgba(15,23,42,.55)";
    
    nav.style.boxShadow="none";
    
    }
    
    });
    
    // -----------------------------
    // Hero Image Tilt
    // -----------------------------
    
    const heroImg=document.querySelector(".hero-img");
    
    if(heroImg){
    
    heroImg.addEventListener("mousemove",(e)=>{
    
    const rect=heroImg.getBoundingClientRect();
    
    const x=e.clientX-rect.left;
    
    const y=e.clientY-rect.top;
    
    const rotateY=((x-rect.width/2)/18);
    
    const rotateX=((rect.height/2-y)/18);
    
    heroImg.style.transform=
    
    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    });
    
    heroImg.addEventListener("mouseleave",()=>{
    
    heroImg.style.transform=
    
    "perspective(1000px) rotateX(0) rotateY(0)";
    
    });
    
    }
    
    // -----------------------------
    // Copyright Year
    // -----------------------------
    
    const year=document.getElementById("year");
    
    if(year){
    
    year.textContent=new Date().getFullYear();
    
    }
    
    console.log("✅ Portfolio V3 Loaded Successfully");
    // =======================================
// PORTFOLIO V3 - SCRIPT.JS (PART 4)
// Premium Features
// =======================================

// -----------------------------
// Mouse Glow Effect
// -----------------------------

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// -----------------------------
// Lazy Loading Images
// -----------------------------

document.querySelectorAll("img").forEach(img => {

    img.loading = "lazy";

});

// -----------------------------
// Copy Email
// -----------------------------

const emailCards = document.querySelectorAll(".copy-email");

emailCards.forEach(card => {

    card.addEventListener("click", () => {

        navigator.clipboard.writeText("nilimkumargogoi03@gmail.com");

        card.innerHTML = "✅ Email Copied";

        setTimeout(() => {

            card.innerHTML = "📧 Copy Email";

        },2000);

    });

});

// -----------------------------
// Animated Numbers on Hover
// -----------------------------

document.querySelectorAll(".stat-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// -----------------------------
// Project Card Tilt
// -----------------------------

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=(rect.height/2-y)/18;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

// -----------------------------
// Console Message
// -----------------------------

console.log("%cPortfolio Designed by Nilim Kumar Gogoi",
"font-size:18px;color:#38bdf8;font-weight:bold;");
