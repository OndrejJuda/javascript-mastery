import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const experiencesQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(experiencesQuery)
      .then((data) => {
        setExperiences(data);
      });

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      });
  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div
          className='app__skills-list'
        >
          {
            skills.map(({ name, bgColor, icon }) => (
              <motion.div
                className='app__skills-item app__flex'
                key={name}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <div className='app__flex' style={{ backgroundColor: bgColor }}>
                  <img src={urlFor(icon)} alt={name} />
                </div>
                <p className='p-text'>{name}</p>
              </motion.div>
            ))}
        </motion.div>
        <motion.div
          className='app__skills-exp'
        >
          {
            experiences.map(({ works, year }) => (
              <motion.div
                className='app__skills-exp-item'
                key={year}
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{year}</p>
                </div>
                <motion.div
                  className='app__skills-exp-works'
                >
                  {
                    works.map(({ name, company, desc }) => (
                      <>
                        <motion.div
                          className='app__skills-exp-work'
                          key={name}
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          data-tip
                          data-for={name}
                        >
                          <h5 className='bold-text'>{name}</h5>
                          <p className='p-text'>{company}</p>
                        </motion.div>
                        <ReactTooltip
                          id={name}
                          effect='solid'
                          arrowColor='#fff'
                          className='skills-tooltip'
                        >
                          {desc}
                        </ReactTooltip>
                      </>
                    ))
                  }
                </motion.div>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);