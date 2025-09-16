'use client';

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded
  }, []);

  return (
    <Particles
      className="fixed inset-0 z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          color: {
            value: "#188665ff", // Blanco para mayor visibilidad
          },
          links: {
            color: "#8b5cf6",
            distance: 120,
            enable: true,
            opacity: 0.8,
            width: 2,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 60,
          },
          opacity: {
            value: 0.9, // Más opaco
          },
          size: {
            value: 4, // Más grande
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;