import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, aboutInfo } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-black text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>{aboutInfo.name}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[17px] max-w-3xl leading-[30px]'
      >
        {aboutInfo.description}
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className='flex gap-10 mt-10'
      >
        {aboutInfo.socialLinks.map((social, index) => (
          // Center the image
          <motion
            key={social.name}
            variants={fadeIn("bottom", "spring", index * 0.5, 1)}
            className='flex items-center gap-2'
          >
            <img
              src={social.icon}
              alt={social.name}
              className='w-8 h-8 object-contain'
            />
            <a
              href={social.url}
              target='_blank'
              rel='noreferrer'
              className='text-secondary'
            >
              <b>{social.name}</b>
            </a>
          </motion>
        ))}
      </motion.div>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
