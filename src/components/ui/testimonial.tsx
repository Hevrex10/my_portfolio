"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const testimonialTitleRef = useRef<HTMLHeadingElement>(null);
  const testimonialcard1Ref = useRef<HTMLDivElement>(null);
  const testimonialcard2Ref = useRef<HTMLDivElement>(null);
  const testimonialcard3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the entire testimonial section
    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate the title characters
    const titleChars = testimonialTitleRef.current?.querySelectorAll("span");
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
            trigger: testimonialTitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animate testimonial cards
    const cards = [
      testimonialcard1Ref,
      testimonialcard2Ref,
      testimonialcard3Ref,
    ];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.2, // Stagger the animation
          scrollTrigger: {
            trigger: card.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  const text = "Nice things people have said about me:";

  return (
    <section
      id="testimonials"
      className="flex w-full items-center justify-center bg-color-1 px-4 py-16 lg:px-20 lg:py-24"
    >
      <article className="inline-flex w-full max-w-[1280px] flex-col items-center justify-center gap-6 self-stretch lg:gap-12 lg:px-8">
        <div className="inline-flex flex-col items-center justify-center gap-4 self-stretch">
          <div
            ref={testimonialRef}
            className="flex items-center justify-center"
          >
            <h2 className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1 text-color-6">
              Testimonials
            </h2>
          </div>
          <div>
            <p
              ref={testimonialTitleRef}
              className="font-inter text-sm font-medium leading-tight text-color-6"
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

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
          <div
            ref={testimonialcard1Ref}
            className="inline-flex flex-1 flex-col items-center justify-start gap-6 self-stretch rounded-xl bg-default p-12 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-[50%] bg-color-4 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </div>
            <div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                “Job well done! I am really impressed. He is very very good at
                what he does:) I would recommend ola and will rehire in the
                future for development.”
              </p>
            </div>
            <div>
              <p className="justify-start text-center font-inter text-xl font-semibold leading-7 text-color-9">
                Nanna
              </p>
              <p className="justify-start text-center font-inter text-sm font-normal leading-tight text-color-6">
                Founder - i38 Agency
              </p>
            </div>
          </div>
          <div
            ref={testimonialcard2Ref}
            className="inline-flex flex-1 flex-col items-center justify-start gap-6 self-stretch rounded-xl bg-default p-12 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-[50%] bg-color-4 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </div>
            <div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                “Great guy, highly recommended for any COMPLEX front-end
                development job! His skills are top-notch and he will be an
                amazing addition to any team.”
              </p>
            </div>
            <div>
              <p className="justify-start text-center font-inter text-xl font-semibold leading-7 text-color-9">
                James
              </p>
              <p className="justify-start text-center font-inter text-sm font-normal leading-tight text-color-6">
                Co-founder - 138 agency
              </p>
            </div>
          </div>
          <div
            ref={testimonialcard3Ref}
            className="inline-flex flex-1 flex-col items-center justify-start gap-6 self-stretch rounded-xl bg-default p-12 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-[50%] bg-color-4 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </div>
            <div>
              <p className="font-inter text-base font-normal leading-normal text-color-6">
                “ola was extremely easy and pleasant to work with and he truly
                cares about the project being a success. ola has a high level of
                knowledge and was able to work on my MERN stack application
                without any issues.”
              </p>
            </div>
            <div>
              <p className="justify-start text-center font-inter text-xl font-semibold leading-7 text-color-9">
                Swagg
              </p>
              <p className="justify-start text-center font-inter text-sm font-normal leading-tight text-color-6">
                Entreprenuer
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Testimonial;
