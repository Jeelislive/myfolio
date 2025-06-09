import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80, // Approx 50-100 particles
            density: {
              enable: true,
              value_area: 800, // Adjust density area
            },
          },
          color: {
            value: "#ffffff", // Light-colored particles
          },
          shape: {
            type: "circle", // Small, circular dots
          },
          opacity: {
            value: {min: 0.3, max: 0.5}, // Semi-transparent (0.3-0.5)
            random: true, // Slight variation in opacity
            anim: { // Subtle opacity animation for a gentle glow
              enable: true,
              speed: 0.5,
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 }, // Varying slightly (1 to 3 pixels)
            random: true,
            anim: {
              enable: false, // No size animation
            },
          },
          line_linked: {
            enable: true, // Enable lines
            distance: 120, // Connect within 100-150 pixels
            color: "#ffffff", // White or light gray lines
            opacity: 0.3, // Low opacity (0.2-0.5)
            width: 1, // Thin lines
          },
          move: {
            enable: true,
            speed: {min: 0.5, max: 1.5}, // Slow speed (0.5-1.5 units)
            direction: "none", // Random directions
            random: true, // Enable random movement
            straight: false, // Non-linear, drifting movement
            out_mode: "out", // Particles disappear when they go off screen
            bounce: false,
            attract: {
              enable: false,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true, // Enable hover interactivity
              mode: "repulse", // Particles repulse from cursor
            },
            onclick: {
              enable: true, // Enable click interactivity
              mode: "push", // Add a few new particles on click
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 80, // Repulsion distance
              duration: 0.4,
            },
            push: {
              particles_nb: 4, // Number of particles to add on click
            },
            grab: { // Kept for potential future use if "attract" with lines is desired
              distance: 100,
              line_linked: {
                opacity: 0.5
              }
            }
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
