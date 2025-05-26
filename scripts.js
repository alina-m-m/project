'use strict'

document.addEventListener("DOMContentLoaded", function() {
    console.log('Скрипт отработал корректно');
    
    const welcomeButtonModal = document.querySelector(".Sign-up-button");
    const modalApplication = document.querySelector(".applications");
    
    if (welcomeButtonModal && modalApplication) {
        welcomeButtonModal.addEventListener("click", function(event) {
            event.preventDefault();
            modalApplication.removeAttribute("hidden");
        });
    }
    
    window.addEventListener("click", function(event) {
        if (event.target === modalApplication) {
            modalApplication.setAttribute("hidden", true);
        }
    });
    
    const closeModalButton = document.querySelector(".application__close");
    if (closeModalButton) {
        closeModalButton.addEventListener("click", function(event) {
            event.preventDefault();
            modalApplication.setAttribute("hidden", true);
        });
    }

    const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  const navItems = document.querySelectorAll('.nav__item');
  const navLinks = document.querySelectorAll('.nav__link');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      navItems.forEach(item => {
        item.classList.remove('nav__item-active');
      });
      navLinks.forEach(link => {
        link.classList.remove('nav__link-active');
      });
      
      this.classList.add('nav__link-active');
      this.parentElement.classList.add('nav__item-active');
      
      if (nav.classList.contains('active')) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
});


