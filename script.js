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
        themeBtn.classList.replace("fa-moon", "fa-sun");
      } else {
        themeBtn.classList.replace("fa-sun", "fa-moon");
      }
    });
  }
  
  // ---------- Mobile Menu ----------
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");
  
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("show");
  
      if (menu.classList.contains("show")) {
        menuBtn.classList.replace("fa-bars", "fa-xmark");
      } else {
        menuBtn.classList.replace("fa-xmark", "fa-bars");
      }
    });
  
    document.querySelectorAll("#menu a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("show");
        menuBtn.classList.replace("fa-xmark", "fa-bars");
      });
    });
  }
  
  // ---------- Progress + Top Button ----------
  const progressBar = document.getElementById("progress-bar");
  const topBtn = document.getElementById("topBtn");
  
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
    if (progressBar) {
      progressBar.style.width = (scrollTop / scrollHeight) * 100 + "%";
    }
  
    if (topBtn) {
      topBtn.style.display = scrollTop > 400 ? "block" : "none";
    }
  
    startCounter();
  });
  
  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  
  // ---------- Counter ----------
  let counterStarted = false;
  
  function counter(id, end, speed) {
    const element = document.getElementById(id);
    if (!element) return;
  
    let value = 0;
    const timer = setInterval(() => {
      value++;
      element.textContent = value + "+";
      if (value >= end) clearInterval(timer);
    }, speed);
  }
  
  function startCounter() {
    if (counterStarted) return;
  
    const stats = document.querySelector(".stats");
    if (!stats) return;
  
    const position = stats.getBoundingClientRect().top;
  
    if (position < window.innerHeight - 100) {
      counterStarted = true;
      counter("projectCount", 3, 150);
      counter("clientCount", 5, 150);
      counter("skillCount", 10, 100);
      counter("experienceCount", 5, 150);
    }
  }
  
  // ---------- Reveal Animation ----------
  const revealItems = document.querySelectorAll(
    ".skill-card,.project-card,.certificate-card,.timeline-content,.contact-card,.info-card"
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },{threshold:0.2});
  
  revealItems.forEach(item=>{
    item.style.opacity="0";
    item.style.transform="translateY(50px)";
    item.style.transition="all .8s ease";
    observer.observe(item);
  });
  
  // ---------- Contact Form ----------
  const contactForm=document.querySelector(".contact-form");
  
  if(contactForm){
    contactForm.addEventListener("submit",function(e){
      e.preventDefault();
      alert("Thank you! Your message has been received.");
      this.reset();
    });
  }
  
