import React from 'react';
import {Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import {services} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';


  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] shadow-card rounded-[20px]"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] px-12 min-h-[280px] flex justify-evenly items-center flex-col"
           >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] text-center font-bold">{title}</h3>
           </div>
        </motion.div>
      </Tilt>
    );
  };
  const About = () => {
    const aboutConstant =
      "Welcome to my portfolio! I'm a full-stack web developer skilled in PHP and JavaScript, with experience in frameworks like React, Angular, and CodeIgniter. I'm learning about Ethical Hacking to make applications more secure. I'm also getting better at MERN stack and 3D development. I work closely with clients to create efficient, user-friendly solutions. I'm also a talented photographer. I'm excited to join your team and help bring your projects to life!";
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {aboutConstant}
        </motion.p>
        <div className="mt-5 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard index={index} key={service.title} {...service} />
          ))}
        </div>
      </>
    );
  };
export default SectionWrapper(About , "about");
  