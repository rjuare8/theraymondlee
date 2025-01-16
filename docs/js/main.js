// Resize Navbar on Scroll
window.onscroll = function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("small");
    } else {
        navbar.classList.remove("small");
    }
};

// Smooth Scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const offset = 80; // Adjust this value based on your sticky navbar height

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the section smoothly, accounting for the navbar height
            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});

// Highlight the active section in the navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Adjust based on the scroll position and section height
        if (pageYOffset >= sectionTop - (sectionHeight / 4)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Slider logic for Current Hermanos section
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Auto-slide every 5 seconds (slower than before)
let slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 5000);

// Add next/previous buttons functionality
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
        resetAutoSlide(); // Reset auto-slide timer on manual navigation
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
        resetAutoSlide(); // Reset auto-slide timer on manual navigation
    });
}

// Reset the auto-slide timer when manually navigating
function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 5000); // Reset the interval to 5 seconds after manual navigation
}

// Open modal when an event column is clicked
document.querySelectorAll('.event-column').forEach(eventColumn => {
    eventColumn.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

// Close modal when the close button is clicked
document.querySelectorAll('.modal .close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add .active class to trigger the animation
          entry.target.classList.add("active");
          // Stop observing once the animation is triggered
          obs.unobserve(entry.target);
        }
      });
    }, {
      // You can adjust the threshold or rootMargin if you want
      // to trigger earlier/later. For example:
      // rootMargin: '0px 0px -100px 0px'
      threshold: 0.1
    });

    // Observe each "reveal-on-scroll" element
    revealElements.forEach(el => observer.observe(el));
  });
