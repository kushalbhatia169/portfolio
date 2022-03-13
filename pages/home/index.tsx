import React from 'react';
import Introduction from './introduction';
import About from './about';
import styles from './home.module.scss';
import Layout from '../../components/layout';
import Services from './services';
import Projects from './projects';

const index = () => {

  return (
    <div className={styles.home}>
      <Layout>
        <Introduction />
        <About />
        <Services />
        <Projects />
      </Layout>
    </div>
  );
};

export default index;