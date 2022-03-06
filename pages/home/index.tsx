import React from 'react';
import Introduction from './introduction';
import About from './about';
import styles from './home.module.scss';
import Layout from '../../components/layout';
import Services from './services';

const index = () => {
  console.log(styles);
  return (
    <div className={styles.home}>
      <Layout>
        <Introduction />
        <About />
        <Services />
      </Layout>
    </div>
  );
};

export default index;