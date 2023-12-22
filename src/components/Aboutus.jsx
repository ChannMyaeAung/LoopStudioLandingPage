import React from "react";
import { desktopImgs, mobileImgs } from "../images";
import { styles } from "../styles";
import { useInView } from "react-intersection-observer";

const Aboutus = () => {
  /* Intersection Observer */
  const [ref, inView] = useInView({
    rootMargin: "200px",
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
      } flex px-2 ease-in-out duration-2000 flex-col items-center md:justify-start justify-center gap-5 md:flex-row`}
    >
      {/* Image */}
      {/* Interactive Img */}
      <div>
        {/* Mobile */}
        <img
          src={mobileImgs.imgInteractive}
          alt="interactive VR on mobile device"
          loading="lazy"
          className="md:hidden"
        />
        {/* Desktop */}
        <div className="hidden md:block">
          <img
            src={desktopImgs.imgInteractive}
            alt="interactive VR on desktop"
            loading="lazy"
            className="object-cover md:w-full xl:h-full clip-me"
          />
        </div>
      </div>
      {/* Content */}
      <div
        className={`${styles.flexCenter} gap-4 md:gap-0 flex-col md:relative md:right-[90px] md:items-start md:pl-2 self-end`}
      >
        {/* Heading */}
        <h1
          className={`text-[20px] uppercase font-josefin md:text-[19px] leading-[25px] text-center md:text-start xl:text-[30px] xl:leading-[50px]`}
        >
          the leader in <br className="hidden md:block" /> interactive vr
        </h1>
        {/* Description */}
        <p className="w-[70%] md:w-full max-w-[800px] md:text-start text-center text-darkGray font-medium text-[13px] md:text-[12px] md:leading-[16px] xl:w-[80%] xl:text-[20px] xl:leading-[30px] 2xl:text-[23px] 2xl:leading-[35px]">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
