import { Dropdown } from 'bootstrap';

import { gsap } from 'gsap';

document.addEventListener("DOMContentLoaded", function () {

    // Animation GSAP pour ".element"
    gsap.to(".element", { duration: 2, x: -50, opacity: 1 });

    // Open close dropdown on click
    $("li.dropdown").click(function () {
        if ($(this).hasClass("open")) {
        $(this).find(".dropdown-menu").slideUp("fast");
        $(this).removeClass("open");
        } else {
        $(this).find(".dropdown-menu").slideDown("fast");
        $(this).toggleClass("open");
        }
    });

    // Close dropdown on mouseleave
    $("li.dropdown").mouseleave(function () {
        $(this).find(".dropdown-menu").slideUp("fast");
        $(this).removeClass("open");
    });

    // Navbar toggle
    $(".navbar-toggle").click(function () {
        $(".navbar-collapse").toggleClass("collapse").slideToggle("fast");
    });

    gsap.from(title, {
        duration: 0.8, // Durée plus courte
        opacity: 0,
        x: -50, // Déplacement vers la gauche
        ease: 'power2.out',
        delay: 0.8
    });
    

    // Navbar colors
    $("#nav-colors > .btn").click(function () {
        const colorMap = {
        pink: "#ff5858",
        red: "#d31027",
        purple: "#41295a",
        blue: "#396afc",
        green: "#add100",
        yellow: "#f7971e",
        orange: "#e43a15",
        };
        const selectedColor = $(this).attr("id");
        const backgroundColor = `linear-gradient(to right, ${colorMap[selectedColor]}, ${
        selectedColor === "pink" ? "#f857a6" : colorMap[selectedColor]
        })`;
        $(".navbar").css("background", backgroundColor);
        $(".dropdown-menu").css("background", colorMap[selectedColor]);
    });

    // Font colors
    $("#font-colors > .btn").click(function () {
        const fontColor = $(this).is("#white") ? "white" : "black";
        $(".navbar .fa, .link, a").css("color", fontColor);
        $(".icon-bar").css("background", fontColor);
    });

    // Edges
    $("#edges > .btn").click(function () {
        const edgeType = $(this).is("#rounded") ? "8px" : "0";
        $(".navbar, .form-control").css("border-radius", edgeType);
        if ($(window).width() > 768) {
        $(".dropdown-menu").css({
            "border-bottom-right-radius": edgeType,
            "border-bottom-left-radius": edgeType,
        });
        }
    });

    const navIcons = document.querySelectorAll('.nav-icon');

    // Créez une animation GSAP pour chaque icône
    navIcons.forEach((icon) => {
        const tl = gsap.timeline({ paused: true });

        tl.to(icon, { x: 10, duration: 0.2 }); // Animation de déplacement horizontal de 10px

        icon.addEventListener('mouseenter', () => {
        tl.play();
        });

        icon.addEventListener('mouseleave', () => {
        tl.reverse();
        });
    });
    // ... Votre code JavaScript existant ...

window.addEventListener('scroll', function() {
    var element = document.getElementById('accueil-title');
    var position = element.getBoundingClientRect();

    // Vérifier si l'élément est visible
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.style.animation = 'titreScroll 1s forwards';
    } else {
        element.style.animation = 'none';
    }
});


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        effect: 'fade',
        loop: true,
        speed: 300,
        mousewheel: {
        invert: false,
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    });
});
