import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])


  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 })
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 })

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className='app__work-filter'>
        {
          ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, i) => (
            <div
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
              key={item}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </div>
          ))
        }
      </div>
      <motion.div
        className='app__work-portfolio'
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {
          filterWork.map(({ name, imgUrl, projectLink, codeLink, title, description, tags }, index) => (
            <div
              className='app__work-item app__flex'
              key={index}
            >
              <div className='app__work-img app__flex'>
                <img src={urlFor(imgUrl)} alt={name} />
                <motion.div
                  className='app__work-hover app__flex'
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                >
                  <a href={projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      className='app__flex'
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      className='app__flex'
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{title}</h4>
                <p className='p-text' style={{ marginTop: 10 }}>{description}</p>
                <div className='app__work-tag app__ flex'>
                  <p className='p-text'>{tags[0]}</p>
                </div>
              </div>
            </div>
          ))
        }
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);