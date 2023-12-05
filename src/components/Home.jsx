import { Suspense, lazy } from "react";
import { desktopImgs, mobileImgs } from "../images";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Navbar = lazy(() => import("./Navbar"));

const variants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const Home = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className={`relative h-screen overflow-hidden`}>
        {/* Image */}
        <div className="absolute w-full z-[1]">
          <img
            src={mobileImgs.imgHero}
            alt=""
            className="block object-cover w-full h-screen md:hidden"
          />
          <img
            src={desktopImgs.imgHero}
            alt=""
            className="hidden object-cover w-full h-screen md:block"
          />

          {/* Transparent Overlay */}
          <div className="absolute top-0 right-0 z-50 hidden w-full h-full md:block bg-Overlay"></div>
        </div>
        {/* Navbar */}
        <Navbar />
        {/* Intro Text Box */}

        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className={`${styles.flexCenter} relative top-[5rem] md:mx-10 lg:mx-16 md:top-[40%] 2xl:w-full 2xl:max-w-[600px] 2xl:top-[20rem] 2xl:py-10 2xl:px-8 py-6 px-3 mx-auto w-[90%] max-w-[470px] border border-White z-10`}
        >
          <h1
            className={`${styles.headingOne} text-[30px] leading-[45px] md:text-[32px] md:leading-[50px] text-White 2xl:text-[70px] 2xl:leading-[90px]`}
          >
            immersive experiences that <br className="block md:hidden" />{" "}
            deliver
          </h1>
        </motion.div>
      </div>
    </Suspense>
  );
};

export default Home;
