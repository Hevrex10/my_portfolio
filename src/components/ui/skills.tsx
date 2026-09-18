"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsTitleRef = useRef<HTMLHeadingElement>(null);
  const skills1Ref = useRef<HTMLDivElement>(null);
  const skills2Ref = useRef<HTMLDivElement>(null);
  const skills3Ref = useRef<HTMLDivElement>(null);
  const skills4Ref = useRef<HTMLDivElement>(null);
  const skills5Ref = useRef<HTMLDivElement>(null);
  const skills6Ref = useRef<HTMLDivElement>(null);
  const skills7Ref = useRef<HTMLDivElement>(null);
  const skills8Ref = useRef<HTMLDivElement>(null);
  const skills9Ref = useRef<HTMLDivElement>(null);
  const skills10Ref = useRef<HTMLDivElement>(null);
  const skills11Ref = useRef<HTMLDivElement>(null);
  const skills12Ref = useRef<HTMLDivElement>(null);
  const skills13Ref = useRef<HTMLDivElement>(null);
  const skills14Ref = useRef<HTMLDivElement>(null);
  const skills15Ref = useRef<HTMLDivElement>(null);
  const skills16Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );
    // Animate the title
    if (skillsTitleRef.current) {
      const skillsTitleChars = skillsTitleRef.current.querySelectorAll("span");
      gsap.fromTo(
        skillsTitleChars,
        { opacity: 0, y: 20, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.035, // Animates each character with a delay
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsTitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animate the skills icons
    const skillsRefs = [
      skills1Ref,
      skills2Ref,
      skills3Ref,
      skills4Ref,
      skills5Ref,
      skills6Ref,
      skills7Ref,
      skills8Ref,
      skills9Ref,
      skills10Ref,
      skills11Ref,
      skills12Ref,
      skills13Ref,
      skills14Ref,
      skills15Ref,
      skills16Ref,
    ];
    skillsRefs.forEach((skillRef, index) => {
      gsap.fromTo(
        skillRef.current,
        { opacity: 0, y: 20, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.4,
          ease: "power3.out",
          delay: index * 0.05, // Stagger the animations
          scrollTrigger: {
            trigger: skillRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  const text = "The skills, tools and technologies I am really good at:";

  return (
    <section
      id="skills"
      className="flex w-full items-center justify-center bg-default py-16 md:py-24"
    >
      <article className="flex w-full max-w-7xl flex-col gap-12 px-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div ref={skillsRef} className="rounded-xl bg-color-3 px-5 py-1">
            <h2 className="font-inter text-sm font-medium leading-tight text-color-6">
              Skills
            </h2>
          </div>
          <div>
            <p
              ref={skillsTitleRef}
              className="w-full max-w-[576px] justify-start text-center font-inter text-xl font-normal leading-7 text-color-6"
            >
              {text.split(" ").map((char, index) => (
                <span
                  key={index}
                  style={{ display: "inline-block", marginRight: "0.3rem" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-y-12 md:grid-cols-6 lg:grid-cols-8">
            <div
              ref={skills1Ref}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-16 w-16">
                <Image src="/images/icon-javscript.svg" fill alt="js icon" />
              </div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                JavaScript
              </p>
            </div>

            <div
              ref={skills2Ref}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-16 w-16">
                <Image src="/images/icon-typescript.svg" fill alt="js icon" />
              </div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                Typescript
              </p>
            </div>

            <div
              ref={skills3Ref}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-16 w-16">
                <Image src="/images/icon-react.svg" fill alt="js icon" />
              </div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                React
              </p>
            </div>

            <div
              ref={skills4Ref}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-16 w-16">
                <Image src="/images/icon-nextjs.svg" fill alt="nextjs icon" />
              </div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                Next.js
              </p>
            </div>
            <div
              ref={skills4Ref}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-16 w-16">
                <Image src="/images/icon-express.svg" fill alt="nextjs icon" />
              </div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                Next.js
              </p>
            </div>

            <div
              ref={skills5Ref}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-16 w-16">
                <Image src="/images/icon-nodejs.svg" fill alt="node.js icon" />
              </div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                Node.js
              </p>
            </div>

        

            <div
              ref={skills8Ref}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-16 w-16">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_316_308)">
                    <path
                      d="M64.4879 31.295C64.3139 20.595 58.3479 10.177 49.1179 4.69099C41.8459 0.161987 32.6599 -1.05701 24.3859 1.03299C11.9329 4.16799 2.00488 15.446 0.742881 28.3C-0.825119 40.44 5.31488 53.066 15.8079 59.292C26.0839 65.736 40.0609 65.475 50.1079 58.692C59.1649 52.814 64.7819 42.092 64.4779 31.304L64.4879 31.295ZM34.2699 59.25C19.7269 60.687 5.66288 48.365 5.26988 33.778C4.16988 21.935 11.9749 10.222 23.1219 6.30299C38.7539 0.0329871 57.9559 11.615 59.5669 28.38C62.0929 43.444 49.5529 58.78 34.2699 59.25ZM24.6999 30.38L45.7299 13.18L34.3659 30.423C31.1439 30.423 27.9219 30.424 24.6999 30.38ZM30.6129 33.56L40.2789 33.604L19.2489 50.847L30.6129 33.56Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_316_308">
                      <rect
                        width="64"
                        height="64"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                Socket.io
              </p>
            </div>

          

          

            <div
              ref={skills11Ref}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-16 w-16">
                <Image src="/images/icon-mongodb.svg" fill alt="mongoDB icon" />
              </div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                MongoDB
              </p>
            </div>

            <div
              ref={skills12Ref}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-16 w-16">
                <Image
                  src="/images/icon-tailwindcss.svg"
                  fill
                  alt="tailwindcss icon"
                />
              </div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                Tailwindcss
              </p>
            </div>

            <div
              ref={skills13Ref}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-16 w-16">
                <Image src="/images/icon-figma.svg" fill alt="figma icon" />
              </div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                Figma
              </p>
            </div>

            <div
              ref={skills16Ref}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-16 w-16">
                <Image src="/images/icon-git.svg" fill alt="git icon" />
              </div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                Git
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skills;
