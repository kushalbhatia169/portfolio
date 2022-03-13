import React from 'react';
import styles from './home.module.scss';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

const introduction = () => {

  return (
    <div className={'d-flex flex-wrap align-items-center flex-column  ' + styles.intro}>
      <div className={styles.intro__image}>
        <div className={styles.main} data-img-url="../../public/images/profile.jpg">
        </div>
      </div>
      <div className={styles.intro__content + ' w-50'}>
        <div className="d-flex flex-wrap justify-content-center ">
          <h1>Kushal Bhatia</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volut purus ut erat
          mus.pendisse aliquam.
        </p>
      </div>
      <div className={'d-flex flex-wrap ' + styles.intro__link}>
        <a className="ms-2 me-2" href="https://github.com/kushalbhatia169" aria-label="Github link">
          <FaGithub size={30} className="cursor-pointer" />
        </a>
        <a className="ms-2 me-2" href="https://www.linkedin.com/in/kushal-bhatia-28061996/" aria-label="LinkedIn link">
          <FaLinkedinIn size={30} className="cursor-pointer" />
        </a>
        <a className="ms-2 me-2" href="https://www.facebook.com/kushalbhatia169" role="link" aria-label="facebook link">
          <FaFacebook size={30} className="cursor-pointer" />
        </a>
        <a className="ms-2 me-2" href="https://twitter.com/ku_bhatia" aria-label="twitter link">
          <FaTwitter size={30} className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default introduction;
