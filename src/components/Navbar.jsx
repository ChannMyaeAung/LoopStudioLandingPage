import { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../data";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="z-[999] flex items-center justify-between px-5 py-8 md:px-10 lg:px-16">
      {/* logo */}
      <div className={`${isNavOpen ? "z-10" : "z-[999]"}`}>
        <img src="/logo.svg" alt="" />
      </div>

      {/* Mobile Toggle Hamburger*/}
      <button
        className={`${styles.cursorTransition} hover:scale-110 md:hidden ${
          isNavOpen ? "z-10" : "z-[999]"
        }`}
        onClick={() => setIsNavOpen(true)}
      >
        <img src="/icon-hamburger.svg" alt="nav-open" />
      </button>

      {/* Nav Menu Overlay Mobile */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            className="fixed top-0 right-0 z-50 w-full h-full bg-Black md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Menu Overlay Content */}
            <div className="flex items-center justify-between px-5 py-8">
              {/* logo */}
              <img src="/logo.svg" alt="" />

              {/* Mobile Menu Close */}
              <button onClick={() => setIsNavOpen(false)}>
                <img src="/icon-close.svg" alt="nav-close" />
              </button>
            </div>

            {/* Menu Nav Links */}
            <div className={`${styles.flexStart} p-6 mt-[6rem]`}>
              <ul className={``}>
                {navLinks.map((navLink) => {
                  const { id, href, link } = navLink;

                  return (
                    <motion.li
                      initial={{ opacity: 0, x: "-500px" }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: "-500px" }}
                      transition={{ type: "tween", duration: 0.75 }}
                      key={id}
                      className={`text-White uppercase font-light text-[28px] flex flex-col tracking-[1px]`}
                    >
                      <a href={href} className="py-2">
                        {link}
                      </a>
                      {/* Bottom border when hovered */}
                      <span className="h-[1px] w-[40%] bg-White opacity-0"></span>
                      <style jsx="true">{`
                        li:hover span {
                          opacity: 1;
                        }
                      `}</style>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
            {/* End of Mobile NavLinks */}
          </motion.div>
        )}
        {/* End of NavMenu Overlay */}
      </AnimatePresence>
      {/* Desktop Nav Links */}
      <div className="hidden md:block z-[999]">
        <ul className="flex items-center justify-between gap-4 lg:gap-6 2xl:gap-10">
          {navLinks.map((navLink) => {
            const { id, href, link } = navLink;

            return (
              <li
                key={id}
                className={`text-White capitalize font-light text-[16px] 2xl:text-[40px] flex flex-col tracking-[1px]`}
              >
                <a href={href}>{link}</a>
                {/* Bottom border when hovered */}
                <span className="h-[1px] w-[40%] mx-auto bg-White opacity-0 mt-2"></span>
                <style jsx="true">{`
                  li:hover span {
                    opacity: 1;
                  }
                `}</style>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
