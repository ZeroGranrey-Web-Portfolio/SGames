'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({
  title,
  index,
  active,
  handleClick,
  id,
  imgUrl,
  gameUrl,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.15, 0.75)}
    className={`relative ${
      active === id ? ' min-w-[350px]' : ' min-w-[230px]'
    } flex lg:flex-[0.5] flex-[2]  items-center justify-center  h-[700px] transition-width duration-[0.7s] cursor-pointer `}
    onClick={() => {
      if (id === active) {
        window.open(gameUrl);
        return;
      }
      handleClick(id);
    }}
  >
    <img
      src={imgUrl}
      alt={title}
      className={`absolute w-full h-full object-cover rounded-[24px] ${
        active !== id && 'hover:opacity-50  duration-[0.4s] '
      }`}
    />

    <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
      <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
        {title}
      </h2>
    </div>
  </motion.div>
);

export default ExploreCard;
