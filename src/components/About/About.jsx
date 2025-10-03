"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import DigitalClock from "../DigitalClock/DigitalClock";
import ShareButton from "../ShareButton/ShareButton";
import { gsap } from "gsap";

const About = () => {
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    const animateText = (element) => {
      if (!element) return [];
      const letters = element.innerText.split("");
      element.innerHTML = letters
        .map(
          (letter) =>
            `<span class="inline-block opacity-0 translate-y-2">${letter}</span>`
        )
        .join("");
      return element.querySelectorAll("span");
    };

    const nameSpans = animateText(nameRef.current);
    const roleSpans = animateText(roleRef.current);
    const emailSpans = animateText(emailRef.current);

    const tl = gsap.timeline();

    tl.to(nameSpans, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.08,
      ease: "power2.out",
    })
      .to(roleSpans, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out",
      })
      .to(emailSpans, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out",
      });
  }, []);

  return (
    <section className="flex gap-4 my-10 mx-auto md:items-center w-[80vw] flex-col md:flex-row flex-wrap">
      <div className="flex gap-8 flex-col lg:flex-row w-full flex-1">
        <div className="flex mr-20 md:mr-0">
          <Image
            className="rounded-full w-48 h-48"
            src="/bg.jpg"
            width={192}
            height={192}
            priority
            alt="profile"
          />
        </div>

        <div className="flex flex-col mt-8 space-y-2">
          <h2 ref={nameRef} className="text-amber-50 font-[font1] text-xl">
            Suman Patra
          </h2>
          <h3 ref={roleRef} className="text-amber-50 font-[font1] text-xl">
            Web Developer
          </h3>
          <h4 ref={emailRef} className="text-amber-50 font-[font1] text-xl">
            patra6319@gmail.com
          </h4>

          {/* Clock will appear after 3s (handled by DigitalClock itself) */}
          <DigitalClock delay={4.5} />
        </div>
      </div>

      <div className="flex justify-end md:justify-between mx-10 md:mx-0">
        <ShareButton />
      </div>
    </section>
  );
};

export default About;
