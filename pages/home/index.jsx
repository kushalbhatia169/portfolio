import React, { useState } from 'react';
import Router from 'next/router';
import { Box } from '@mui/material';
import Image from 'next/image';
import Skills from './skills';
import Slider from './slider';
import styles from './home.module.scss';
import skills from '../../public/images/skills.png';
import work from '../../public/images/work.png';
import blogs from '../../public/images/blogs.jpg';
import contact from '../../public/images/contacts.png';
import Layout from '../../components/layout';
import { getSkillsData } from '../../lib/skills/skills.ts';

export async function getStaticProps() {
  const skillsData = await getSkillsData();
  return {
    props: {
      skillsData: skillsData[0],
    },
  };
}

function HeadingContent({ isSelected, children, setSelectedClass }) {
  return (
    <Box
      className={`m-3 ${(isSelected === children && styles.border_Down) || 'cursor-pointer'} `}
      onClick={() => { setSelectedClass(children) }}
    >
      {children}
    </Box>
  );
}

function Home(props) {
  const [isSelected, setIsSelected] = useState('All');
  const setSelectedClass = (selected) => {
    switch (selected) {
      case 'All':
        setIsSelected('All');
        break;
      case 'Skills':
        setIsSelected('Skills');
        break;

      case 'Work':
        setIsSelected('Work');
        break;

      case 'Blogs':
        setIsSelected('Blogs');
        break;
      case 'Contact':
        setIsSelected('Contact');
        break;
      default:
        setIsSelected('All');
        break;
    }
  };
  return (
    <Layout page="first">
      <Box className={styles.home_main}>
        <Box className="d-flex m-4 p-4 justify-content-between ms-5">
          <Box className="d-flex flex-column">
            <h2> Hey, I&apos;m Kushal Bhatia </h2>
            <span>Software Engineer and Freelancer</span>
          </Box>
          <Box className="mt-3 d-flex me-5">
            <HeadingContent {...{ isSelected, setSelectedClass }}>All</HeadingContent>
            <HeadingContent {...{ isSelected, setSelectedClass }}>Skills</HeadingContent>
            <HeadingContent {...{ isSelected, setSelectedClass }}>Work</HeadingContent>
            <HeadingContent {...{ isSelected, setSelectedClass }}>Blogs</HeadingContent>
            <HeadingContent {...{ isSelected, setSelectedClass }}>Contact</HeadingContent>
          </Box>
        </Box>
        <Box className="d-flex flex-wrap ms-3">
          {(isSelected === 'All' || isSelected === 'Skills')
                    && (
                      <Img {...{
                        height: 300, width: 410, classes: 'ms-5', alt: 'Skills',
                      }}
                      >
                        {skills}
                      </Img>
                    )}
          {(isSelected === 'All' || isSelected === 'Work')
                        && (
                          <Img {...{
                            height: 300, width: 410, classes: 'ms-5', alt: 'Work',
                          }}
                          >
                            {work}
                          </Img>
                        )}
          {(isSelected === 'All' || isSelected === 'Blogs')
                    && (
                      <Img {...{
                        height: 300, width: 410, classes: 'ms-5', alt: 'Blogs',
                      }}
                      >
                        {blogs}
                      </Img>
                    )}
          {(isSelected === 'All' || isSelected === 'Contact')
                    && (
                      <Img {...{
                        height: 300, width: 410, classes: 'ms-5', alt: 'Contact',
                      }}
                      >
                        {contact}
                      </Img>
                    )}
        </Box>
        <Skills {...{ ...props }} />
        <Slider />
      </Box>
    </Layout>
  );
}

const callRoute = (alt) => {
  switch (alt) {
    case 'Skills':
      Router.push('/skills');
      break;
    case 'Work':
      Router.push('/work');
      break;
    case 'Blogs':
      Router.push('/blogs');
      break;
    case 'Contact':
      Router.push('/contact');
      break;
    default:
      break;
  }
};

function Img({
  height, width, children, classes, alt,
}) {
  return (
    <Box className="d-flex flex-wrap">
      <Box
        onClick={() => callRoute(alt)}
        className={`${styles.div_hover_class} d-flex justify-content-center 
        align-items-center position-absolute ms-5 pb-5`}
      >
        <h3 className="mt-5">{alt}</h3>
      </Box>
      <Image
        src={children}
        alt={alt}
        className={`${classes} pb-5`}
        height={height}
        width={width}
      />
    </Box>
  );
}

export default Home;
