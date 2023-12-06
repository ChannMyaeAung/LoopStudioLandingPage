import { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../data";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav
      className="z-[999] flex items-center justify-between px-5 py-8 md:px-10 lg:px-16"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* logo */}
      <div className={`${isNavOpen ? "z-10" : "z-[999]"}`}>
        <img src="/logo.svg" alt="logo" />
      </div>

      {/* Mobile Toggle Hamburger*/}
      <button
        className={`${styles.cursorTransition} hover:scale-110 md:hidden ${
          isNavOpen ? "z-10" : "z-[999]"
        }`}
        aria-label="Open Navigation Menu Mobile Version"
        onClick={() => setIsNavOpen(true)}
      >
        <img src="/icon-hamburger.svg" alt="nav-open" />
      </button>

      {/* Nav Menu Overlay Mobile */}
      <>
        {isNavOpen && (
          <motion.div
            className="fixed top-0 right-0 z-50 w-full h-full bg-Black md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-expanded={isNavOpen}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Menu Overlay Content */}
            <div
              aria-describedby="menu overlay"
              className="flex items-center justify-between px-5 py-8"
            >
              {/* logo */}
              <img src="/logo.svg" alt="logo on menu overlay" />

              {/* Mobile Menu Close */}
              <button
                onClick={() => setIsNavOpen(false)}
                aria-label="Close Navigation Menu Mobile Version"
              >
                <img src="/icon-close.svg" alt="nav-close" />
              </button>
            </div>

            {/* Menu Nav Links */}
            <div className={`${styles.flexStart} p-6 mt-[6rem]`}>
              <motion.ul
                variants={variants}
                initial="initial"
                animate="animate"
                className={``}
              >
                {navLinks.map((navLink) => {
                  const { id, href, link } = navLink;

                  return (
                    <motion.li
                      variants={variants}
                      key={id}
                      whileHover={{ borderBottom: "1px solid white" }}
                      whileTap={{ borderBottom: "1px solid white" }}
                      role="menuitem"
                      className={`text-White uppercase font-light text-[28px] flex flex-col tracking-[1px]`}
                    >
                      <a href={href} className="py-2">
                        {link}
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
            {/* End of Mobile NavLinks */}
          </motion.div>
        )}
        {/* End of NavMenu Overlay */}
      </>
      {/* Desktop Nav Links */}
      <div className="hidden md:block z-[999]">
        <ul className="flex items-center justify-between gap-4 lg:gap-6 2xl:gap-10">
          {navLinks.map((navLink) => {
            const { id, href, link } = navLink;

            return (
              <li
                key={id}
                role="menuitem"
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
