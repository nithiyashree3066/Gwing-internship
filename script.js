document.addEventListener("DOMContentLoaded", () => {
  // Navbar toggle
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const navLinks = document.getElementById("nav-links");
  openMenu.onclick = () => navLinks.classList.add("active");
  closeMenu.onclick = () => navLinks.classList.remove("active");


  // Image slider
  let index = 0;
  let slides = document.getElementsByClassName("slide-container");
  showSlide(index);
  autoSlide();


  function showSlide(n) {
    if (n >= slides.length) {
      index = 0;
    } else if (n < 0) {
      index = slides.length - 1;
    } else {
      index = n;
    }


    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }


    slides[index].style.display = "block";
  }


  window.changeSlide = function (n) {
    showSlide(index + n);
  }


  function autoSlide() {
    setInterval(() => {
      showSlide(index + 1);
    }, 8000);
  }
});


  // Contact Form: EmailJS
  emailjs.init("M7nN7bvKL_Fr90ZbC");


  const form = document.getElementById("contactForm");
  const msgDiv = document.getElementById("formMsg");


  form.addEventListener("submit", function (e) {
    e.preventDefault();


    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    if (!name || !email || !message) {
      msgDiv.textContent = "Please fill in all fields.";
      msgDiv.className = "message error";
      return;
    }


    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };


    emailjs.send("service_h3dnt0m", "template_31vxxxu", templateParams)
      .then(function () {
        msgDiv.textContent = "Message sent to your email!";
        msgDiv.className = "message success";
        form.reset();
      }, function (error) {
        msgDiv.textContent = "Failed to send message. Try again.";
        msgDiv.className = "message error";
        console.error("EmailJS error:", error);
      });
  });