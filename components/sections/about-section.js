import React from "react";
import { Grid } from "../ui/grid-pattern";

const AboutSection = () => {
  return (
    <div id="About" className="w-full md:p-24 py-16 dark:bg-[#0b011d] bg-[#60478b]">
      <div className="relative bg-gradient-to-b dark:from-[#0b011d] dark:to-[#0b011d] from-[#60478b] to-[#60478b] p-6 overflow-hidden">
        <Grid size={50} direction={"left"} />
        <div className="md:text-xl text-lg md:p-20 text-white">
          <p>Hey, I'm Yusuf.</p>
          <br />
          <p>
            I create premium websites and apps for ambitious, design-driven
            people.
          </p>
          <br />

          <p>
            Wielding world-class programmes and robust, elegant code, I
            captivate audiences with stories, illustrations, mockups &
            animations.
          </p>
          <br />

          <p>
            I agonise over the details so that you don't have to, offering
            custom services in website development and mobile apps. In short, I
            am a multidisciplinary full-stack developer with a passion for
            design, doing his best to craft websites that are beautiful,
            compelling and performant.
          </p>
          <br />

          <p>
            Thank you for taking the time to explore my little corner of the
            internet.
          </p>
        </div>
        <Grid size={50} direction={"right"} />
      </div>
    </div>
  );
};

export default AboutSection;
