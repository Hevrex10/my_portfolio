"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workRef = useRef<HTMLDivElement>(null);
  const workTitleRef = useRef<HTMLHeadingElement>(null);
  const workCard1Ref = useRef<HTMLDivElement>(null);
  const workCard2Ref = useRef<HTMLDivElement>(null);
  const workCard3Ref = useRef<HTMLDivElement>(null);

  // Animate the work section
  useEffect(() => {
    gsap.fromTo(
      workRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate the title characters
    const titleChars = workTitleRef.current?.querySelectorAll("span");
    if (titleChars) {
      gsap.fromTo(
        titleChars,
        { opacity: 0, y: 20, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.035,
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: workTitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animate each work card
    [workCard1Ref, workCard2Ref, workCard3Ref].forEach((cardRef, index) => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: `top ${75 + index * 10}%`,
            end: `bottom ${20 - index * 10}%`,
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  const text = "Some of the noteworthy projects I have built:";

  return (
    <section
      id="work"
      className="flex w-full flex-col items-center justify-center px-4 py-12 lg:px-20 lg:py-24"
    >
      <article className="flex w-full max-w-[1280px] flex-col gap-12 lg:px-8">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div
            ref={workRef}
            className="inline-flex items-center justify-center rounded-xl bg-color-2 px-5 py-1"
          >
            <h2 className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
              Work
            </h2>
          </div>
          <div>
            <p
              ref={workTitleRef}
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

        <div
          ref={workCard1Ref}
          className="flex w-full flex-col items-stretch justify-center shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07)] lg:flex-row"
        >
          <div className="h-[350px] w-full rounded-tl-xl rounded-tr-xl bg-color-1 p-8 lg:h-[unset] lg:w-1/2 lg:rounded-bl-xl lg:rounded-tl-xl lg:rounded-tr-none lg:p-12">
            <div className="relative h-full w-[100%] rounded-xl">
              <Image
                src={"/images/image.png"}
                alt="work 1"
                fill
                className="rounded-xl object-cover object-left-top"
              />
            </div>
          </div>

          <div className="flex h-[100%] w-full flex-col gap-4 rounded-bl-xl rounded-br-xl bg-color-special p-8 lg:order-2 lg:w-1/2 lg:rounded-bl-none lg:rounded-br-xl lg:rounded-tr-xl lg:p-12">
            <div>
              <h2 className="text-color- justify-start self-stretch font-inter text-xl font-semibold leading-7">
                Rex Commerce
              </h2>
            </div>
            <div>
              <p className="justify-start self-stretch font-inter text-base font-normal leading-normal text-color-6">
                Rex E-Commerce is a modern web-based shopping application built
                with React and Redux, designed to deliver a smooth and
                responsive user experience. It features efficient product
                browsing, cart management, and order handling, with Redux
                managing global state for consistency and scalability. The
                project demonstrates practical experience in building real-world
                React applications with structured state management and clean,
                maintainable code.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  React
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  Tailwind
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  Figma
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  Git
                </p>
              </div>
            </div>
            <div>
              <Link href={"https://rex-commerce.vercel.app/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="fill-color-6 transition-all duration-300 ease-in hover:fill-color-10"
                  viewBox="0 0 256 256"
                >
                  <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div
          ref={workCard2Ref}
          className="flex w-full flex-col items-stretch justify-center shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07)] lg:flex-row"
        >
          <div className="h-[350px] w-full rounded-tl-xl rounded-tr-xl bg-color-1 p-8 lg:order-2 lg:h-[unset] lg:w-1/2 lg:rounded-br-xl lg:rounded-tl-none lg:rounded-tr-xl lg:p-12">
            <div className="relative h-full w-[100%] rounded-xl">
              <Image
                src={"/images/reactQuiz.png"}
                alt="work 2"
                fill
                className="rounded-xl object-cover object-left-top"
              />
            </div>
          </div>

          <div className="flex h-[100%] w-full flex-col gap-4 rounded-bl-xl rounded-br-xl bg-color-special p-8 lg:order-1 lg:w-1/2 lg:rounded-bl-xl lg:rounded-br-none lg:rounded-tl-xl lg:p-12">
            <div>
              <h2 className="text-color- justify-start self-stretch font-inter text-xl font-semibold leading-7">
                React Quiz
              </h2>
            </div>
            <div>
              <p className="justify-start self-stretch font-inter text-base font-normal leading-normal text-color-6">
                The React Quiz application is an interactive learning tool built
                with React and the Context API to manage global state
                efficiently. It allows users to answer questions, track
                progress, and receive instant feedback in a smooth and
                responsive interface. The project demonstrates a clear
                understanding of React fundamentals, component-based
                architecture, and state management using Context for lightweight
                application logic.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
            
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  React
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  Tailwind
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  Figma
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  Git
                </p>
              </div>
            </div>
            <div>
              <Link href={"https://react-quiz-henna-rho.vercel.app/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="fill-color-6 transition-all duration-300 ease-in hover:fill-color-10"
                  viewBox="0 0 256 256"
                >
                  <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div
          ref={workCard3Ref}
          className="flex w-full flex-col items-stretch justify-center shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07)] lg:flex-row"
        >
          <div className="h-[350px] w-full rounded-tl-xl rounded-tr-xl bg-color-1 p-8 lg:h-[unset] lg:w-1/2 lg:rounded-bl-xl lg:rounded-tl-xl lg:rounded-tr-none lg:p-12">
            <div className="relative h-full w-[100%] rounded-xl">
              <Image
                src={"/images/omnifood.png"}
                alt="work 1"
                fill
                className="rounded-xl object-cover object-left-top"
              />
            </div>
          </div>

          <div className="flex h-[100%] w-full flex-col gap-4 rounded-bl-xl rounded-br-xl bg-color-special p-8 lg:order-2 lg:w-1/2 lg:rounded-bl-none lg:rounded-br-xl lg:rounded-tr-xl lg:p-12">
            <div>
              <h2 className="text-color- justify-start self-stretch font-inter text-xl font-semibold leading-7">
                OmniFood Landing Page
              </h2>
            </div>
            <div>
              <p className="justify-start self-stretch font-inter text-base font-normal leading-normal text-color-6">
                This landing page template was created using only vanilla
                JavaScript, which means everything you see— from the smooth form
                interactions to the image gallery—was hand-coded for simplicity
                and speed. It’s designed to be respectful and easy to use,
                helping visitors find important information like services,
                contact details, and support options quickly, without the bloat
                or distractions of heavy frameworks.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  HTML
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  CSS
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  Javascript
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  Figma
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1">
                <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                  Git
                </p>
              </div>
            </div>
            <div>
              <Link href={"https://omnifood-project-delta.vercel.app/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="fill-color-6 transition-all duration-300 ease-in hover:fill-color-10"
                  viewBox="0 0 256 256"
                >
                  <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Work;
