"use client"
import React from "react";
import Image from "next/image";

export const DummyContent = ({title, description,image, features}) => {
    return (
      <>
        <div
          className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-400 text-base md:text-2xl  max-w-3xl mx-auto">
            <span className="font-medium text-neutral-200">
              {title}
            </span>
          </p>
          <br />
          <p className="text-neutral-400 text-base md:text-2xl  max-w-3xl mx-auto">
            {description}
          </p>

          <Image
            src={image}
            alt="project mockups"
            height="500"
            width="500"
            className="mx-auto mt-5 object-contain rounded-3xl"
          />
        </div>
        {features && features.map((feature, index) => (
            <div
            key={index}
            className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-center dark:text-neutral-400 text-base md:text-4xl  max-w-3xl mx-auto">
              <span className="font-bold text-neutral-200">
                {feature.title}
              </span>
            </p>
            <br />
    
            <Image
              src="/macbook.webp"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        ))}
      </>
    );
  };