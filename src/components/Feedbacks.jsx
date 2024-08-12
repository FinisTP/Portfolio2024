import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const FeedbackCard = ({
  index,
  title,
  name,
  issuer,
  description
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-white-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>
      <p className='text-white font-medium text-[16px] flex flex-col gap-5'>
      
        <p className='text-white tracking-wider text-[18px] font-bold text-center'>{name}</p>
        <span className='blue-text-gradient text-[24px] text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>{title}</span>
      </p>

    </p>

    <div className='mt-1'>


      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
        </div>
        <p className='text-black font-medium text-[14px] italic'>
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Achievements.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {achievements.map((achievement, index) => (
          <FeedbackCard key={achievement.name} index={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "achievement");
