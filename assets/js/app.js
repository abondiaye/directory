
import '../css/app.scss';

// Importez GSAP pour une utilisation globale
const { gsap } = window;

// Animation de l'élément
gsap.to("#animated-element", {
    duration: 2, // Durée de l'animation en secondes
    x: 100, // Animation de translation sur l'axe X
    rotation: 360, // Rotation de 360 degrés
    opacity: 0.7, // Réglage de l'opacité
    scale: 1.2, // Mise à l'échelle à 120%
    ease: "power2.out" // Courbe d'animation (easing)
});
