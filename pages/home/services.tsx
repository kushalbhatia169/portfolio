import React from 'react';
import styles from './home.module.scss';
import { CgWebsite } from 'react-icons/cg';
import { FaReact, FaAppStoreIos, FaNode, FaAws } from 'react-icons/fa';

const services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.services__heading}>
        <h1>What I Do</h1>
        <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris ipsum sit nibh amet egestas tellus. Eu leo morbi massa
                    sem faucibus nulla gravida arcu ante sollicitudin orci nunc gravida.
        </p>
      </div>
      <div className={styles.services__list + ' d-flex'}>
        <div className={styles.services__item + ' d-flex flex-column align-items-center justify-content-center'}>
          <div>
            <CgWebsite size={54} />
            <h5>Responsive Web Design</h5>
          </div>
        </div>
        <div className={styles.services__item + ' d-flex flex-column align-items-center justify-content-center'}>
          <div>
            <FaReact size={54} />
            <h5>Website Development</h5>
          </div>
        </div>
        <div className={styles.services__item + ' d-flex flex-column align-items-center justify-content-center'}>
          <div>
            <FaAppStoreIos size={54} />
            <h5>Mobile App Development</h5>
          </div>
        </div>
        <div className={styles.services__item + ' d-flex flex-column align-items-center justify-content-center'}>
          <div>
            <FaNode size={54} />
            <h5>Backend Development</h5>
          </div>
        </div>
        <div className={styles.services__item + ' d-flex flex-column align-items-center justify-content-center'}>
          <div>
            <FaAws size={54} />
            <h5>Deployments</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;