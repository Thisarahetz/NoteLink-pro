"use client";

import Image from "next/image";

import { CustomButton } from "@/components";

const Hero = () => {
  // const handleScroll = () => {
  //   const nextSection = document.getElementById("discover");

  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">All-in-One Note-Taking Solution!</h1>

        <p className="hero__subtitle">
          Are you tired of juggling multiple apps to take notes, save links, and
          manage your to-do lists? Look no further! NoteLink Pro is the ultimate
          software designed to streamline your workflow and enhance your
          productivity.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          // handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
