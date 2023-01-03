'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    className={`${styles.paddings} py-8 relative`}
    initial="hidden"
    whileInView="show"
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-justify-evenly " />
      <div className="flex flex-col ">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between ">
          <p className="font-normal text-[14px] text-white opacity-50 justify-end w-full">
            Copyright © {new Date().getFullYear() - 1} -{' '}
            {new Date().getFullYear()}. All rights reserved
          </p>
          <div>
            <h2 className=" text-[20px] text-white font-extrabold">
              Email:
            </h2>
            <h2 className="underline animate-text text-[20px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffbb] to-[#009dff]">
              sgamesstudio@gmail.com
            </h2>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
