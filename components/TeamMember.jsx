'use client';

import { motion } from 'framer-motion';
import { fadeIn, zoomIn } from '../utils/motion';

const TeamMember = ({ name, imgUrl, title, description, link }) => (

  <motion.div
    variants={fadeIn('right', 'tween', 0.1, 0.5)}
    className="w-full lg:max-w-[370px] flex justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
  >
    <div className="feedback-gradient" />
    <div>
      <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
        {name}
      </h4>
      <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
        {title}
      </p>
    </div>
    <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
      {description}
    </p>
    <motion.div
      variants={zoomIn(0.6, 0.6)}
      className="lg:block absolute left-[75%] top-[25%]"
    >
      <a href={link} className="cursor-pointer" target="_blank" rel="noreferrer">
        <img
          src={imgUrl}
          alt="stamp"
          className="w-[90%] h-[90%] rounded-full"
        />
      </a>
    </motion.div>

  </motion.div>

);

export default TeamMember;
