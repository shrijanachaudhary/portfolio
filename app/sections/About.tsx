import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"Shrijana Chaudhary."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody text="I am currently pursuing my master's in psychology and have a keen interest in understanding human behavior and mental processes. My passion lies in exploring diverse psychological theories and their practical applications, particularly in areas like cognitive science, mental health, and human development. I believe in embracing challenges and trying new things to broaden my knowledge and experiences. My focus is on developing a deeper understanding of my field and working on my weaknesses to grow both academically and personally..." />

            <AnimatedBody
              delay={0.1}
              text="Whether I’m exploring the intricacies of human behavior or conducting in-depth research, I’m always striving to uncover unique insights and innovative solutions. I love diving into emerging psychological theories and staying up-to-date with the latest advancements in the field, constantly seeking to expand my understanding and make meaningful contributions."
            />

            <AnimatedBody
              delay={0.2}
              text="Right now, I’m working on some fascinating research projects that I’m eager to share in the future. I’m always open to new opportunities and collaborations, especially those that push the boundaries of psychological understanding and create meaningful impact."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
