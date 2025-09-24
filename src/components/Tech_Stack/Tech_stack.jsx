'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Tech_stack = () => {
  const stackRef = useRef([]);

  const techStack = [
    "HTML5",
    "CSS",
    "JavaScript / TypeScript",
    "React",
    "Express.js",
    "NodeJS",
    "Framer Motion",
    "GSAP",
    "Next.js",
    "MongoDB",
    "Figma",
    "Adobe Photoshop",
  ];

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      stackRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
      }
    );

    // Infinite floating animation
    stackRef.current.forEach((el, i) => {
      gsap.to(el, {
        y: "+=10",
        duration: 2 + i * 0.1,
        yoyo: true,
        repeat: -1,
        ease: "easeInOut",
        delay: i * 0.1,
      });
    });
  }, []);

  return (
    <div className="w-full pb-20 mt-16">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Tech Stack</h2>

      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center items-center px-6">
        {techStack.map((tech, index) => (
          <div
            key={index}
            ref={(el) => (stackRef.current[index] = el)}
            className="px-6 py-3 rounded-2xl 
                       bg-gradient-to-r from-neutral-900 to-black
                       text-white font-semibold text-lg 
                       shadow-[0_0_12px_rgba(255,255,255,0.15)]
                       hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                       hover:scale-105 transition-transform"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech_stack;











