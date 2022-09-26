import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { AppWrap } from '../../wrapper';

import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])


  return (
    <>
      <h2 className='head-text'>
        I Know That <span>Good Dev</span> <br /> means <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {
          abouts.map(({ title, description, imgUrl }, index) => (
            <motion.div
              className='app__profile-item'
              key={index}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              <img src={urlFor(imgUrl)} alt={title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}>{title}</h2>
              <p className='p-text' style={{ marginTop: 10 }}>{description}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  );
};

export default AppWrap(About, 'about');