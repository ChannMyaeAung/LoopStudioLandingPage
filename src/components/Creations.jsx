import React from "react";
import { styles } from "../styles";
import { creations } from "../data";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Creations = () => {
  const [ref, inView] = useInView({
    rootMargin: "50px",
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      className={`px-2 flex-col gap-5 md:gap-10 ${styles.flexCenter} md:block mt-10`}
    >
      {/* Title */}
      <div
        ref={ref}
        className={`${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[200px]"
        } ease-in-out duration-1000 ${
          styles.flexCenter
        } justify-between md:py-5`}
      >
        <h1 className={`${styles.headingOne} text-center`}>our creations</h1>

        {/* Button for Larger screens */}
        <button
          className={`btn hidden md:block 2xl:text-[20px] ${styles.cursorTransition} hover:bg-Black hover:text-White`}
        >
          See All
        </button>
      </div>
      {/* Content */}
      <div
        ref={ref}
        className={`${
          inView
            ? "opacity-100 translate-y-0 ease-in-out duration-2000"
            : "opacity-0 translate-y-[300px]"
        }  grid gap-6 md:py-8 md:gap-8 md:grid-cols-4`}
      >
        {creations.map((creation) => {
          const { id, title, imgSm, imgLg } = creation;

          return (
            <div key={id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative ${styles.cursorTransition}`}
              >
                <img
                  src={imgSm}
                  alt="creations images"
                  className="object-cover md:hidden"
                  loading="lazy"
                />

                <img
                  src={imgLg}
                  alt="creations images"
                  className="hidden object-cover w-full h-full md:block"
                  loading="lazy"
                />

                <div className="inner__shadow"></div>

                <div className="absolute z-10 bottom-1 md:left-3 md:bottom-5 left-5 text-White">
                  <h2
                    className={`tracking-[0.5px] text-[20px] leading-[30px] md:text-[21px] text-left md:leading-[26px] 2xl:text-[32px] md:w-full w-[250px] text-White uppercase `}
                  >
                    {title}
                  </h2>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* See all Button */}
      <button
        className={`btn md:hidden ${styles.cursorTransition} hover:bg-Black hover:text-White`}
      >
        See All
      </button>
    </div>
  );
};

export default Creations;
