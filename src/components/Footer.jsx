import React from "react";
import { styles } from "../styles";
import { footerLinks, socialMedia } from "../data";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      className={`${styles.flexCenter} py-10 flex-col bg-Black md:flex-row md:px-8 justify-between`}
    >
      {/* Logo and Footer links */}
      <div className=" md:h-[8rem] md:items-start md:flex md:flex-col">
        {/* logo */}
        <img src="/logo.svg" alt="" className="my-8" />
        {/* Footer Links */}

        <ul
          className={`capitalize text-White ${styles.flexCenter} gap-5 font-alata flex-col md:flex-row`}
        >
          {footerLinks.map((footerLink) => {
            const { id, href, title } = footerLink;

            return (
              <motion.li
                key={id}
                className="relative 2xl:text-[28px] xl:text-[24px]"
                whileHover={{ scale: 1.1 }}
              >
                <a href={href}>{title}</a>
                <span className="absolute w-full mx-auto bottom-[-4px] left-0 h-[2px] opacity-0 hover:opacity-100 bg-White"></span>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* Social Links and Copyright */}
      <div className="flex flex-col md:h-[8rem] md:py-1 gap-3 mt-10 md:gap-0 md:mt-0 md:items-end md:justify-center">
        {/* Social Media */}

        <ul className={`${styles.flexCenter} gap-5 flex-1`}>
          {socialMedia.map((item) => {
            const { id, href, icon } = item;
            return (
              <motion.li
                key={id}
                whileHover={{ scale: 1.25 }}
                className="self-center"
              >
                <a href={href}>
                  <img src={icon} alt="" className="2xl:w-[30px] h-[30px]" />
                </a>
              </motion.li>
            );
          })}
        </ul>

        {/* Copyright */}

        <p className="self-end text-end text-veryDarkGray font-alata text-[14px] sm:text-[16px] xl:text-[24px] 2xl:text-[28px]">
          © {new Date().getFullYear()} Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
