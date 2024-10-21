$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})

//LOG IN_________________________________________________________

document.addEventListener("DOMContentLoaded", function() {
    // Get the login form element
    var loginForm = document.getElementById("login-form");

    // Add submit event listener to the login form
    loginForm.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Here you can add your login logic, such as validating the input fields and submitting the data
        // For demonstration purposes, let's log the form data to the console
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        console.log("Username:", username);
        console.log("Password:", password);

        // You can replace the console.log statements with your actual login logic
    });
});

// VIP_____________________________________________________
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const modal = document.getElementById('modal');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButton = document.querySelector('.close');
    const registerForm = document.getElementById('register-form');
  
    hamburgerMenu.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  
    openModalButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
      });
    });
  
    closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Process the form data here (e.g., send it to a server)
      alert('Registration successful!');
      modal.style.display = 'none';
    });
  });
  