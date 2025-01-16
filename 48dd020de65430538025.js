// Resize Navbar on Scroll
window.onscroll = function () {
  var navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("small");
  } else {
    navbar.classList.remove("small");
  }
}; // Smooth Scrolling for navigation links


document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.nav-link');
  var offset = 80; // Adjust this value based on your sticky navbar height

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      var targetSection = document.getElementById(targetId); // Scroll to the section smoothly, accounting for the navbar height

      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: 'smooth'
      });
    });
  });
}); // Highlight the active section in the navbar

var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", function () {
  var current = "";
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight; // Adjust based on the scroll position and section height

    if (pageYOffset >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
}); // Slider logic for Current Hermanos section

var currentIndex = 0;
var slides = document.querySelectorAll('.slide');
var totalSlides = slides.length;

function showSlide(index) {
  var slider = document.querySelector('.slider');
  slider.style.transform = "translateX(-".concat(index * 100, "%)");
} // Auto-slide every 5 seconds (slower than before)


var slideInterval = setInterval(function () {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}, 5000); // Add next/previous buttons functionality

var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
    resetAutoSlide(); // Reset auto-slide timer on manual navigation
  });
  prevBtn.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
    resetAutoSlide(); // Reset auto-slide timer on manual navigation
  });
} // Reset the auto-slide timer when manually navigating


function resetAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }, 5000); // Reset the interval to 5 seconds after manual navigation
} // Open modal when an event column is clicked


document.querySelectorAll('.event-column').forEach(function (eventColumn) {
  eventColumn.addEventListener('click', function () {
    var modalId = this.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
}); // Close modal when the close button is clicked

document.querySelectorAll('.modal .close').forEach(function (closeButton) {
  closeButton.addEventListener('click', function () {
    this.closest('.modal').style.display = 'none';
  });
}); // Close modal when clicking outside of the modal content

window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var revealElements = document.querySelectorAll(".reveal-on-scroll"); // Create the Intersection Observer

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Add .active class to trigger the animation
        entry.target.classList.add("active"); // Stop observing once the animation is triggered

        obs.unobserve(entry.target);
      }
    });
  }, {
    // You can adjust the threshold or rootMargin if you want
    // to trigger earlier/later. For example:
    // rootMargin: '0px 0px -100px 0px'
    threshold: 0.1
  }); // Observe each "reveal-on-scroll" element

  revealElements.forEach(function (el) {
    return observer.observe(el);
  });
});