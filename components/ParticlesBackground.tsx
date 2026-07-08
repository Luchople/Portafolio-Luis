'use client';

import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="fixed inset-0 z-0"
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 120,
        detectRetina: true,
        background: { color: "transparent" },
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 900 },
          },
          color: {
            // Paleta: verde terminal, morado y cian
            value: ["#22c55e", "#8b5cf6", "#38bdf8"],
          },
          shape: { type: "circle" },
          links: {
            color: "#22c55e",
            distance: 145,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            // Titileo suave
            animation: {
              enable: true,
              speed: 0.6,
              minimumValue: 0.2,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3.5 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.6,
              sync: false,
            },
          },
          // Halo/glow alrededor de cada partícula
          shadow: {
            enable: true,
            color: "#22c55e",
            blur: 6,
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: {
              distance: 190,
              links: { opacity: 0.7, color: "#8b5cf6" },
            },
            push: { quantity: 3 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
