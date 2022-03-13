import React, { PureComponent } from 'react';
import styles from './home.module.scss';
// import uhro from '../../public/images/unicorn_logo.png';
import Slider from './slider';
import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';

class Projects extends PureComponent {

  render() {
    return (
      <div className={styles.projects}>
        <div className={styles.projects__heading}>
          <h1>Projects</h1>
          <p className="mt-4 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi quibusdam, debitis eligendi voluptas aspernatur magnam reprehenderit est
                        at et quam quisquam molestiae enim eveniet dolores harum totam ipsam aliquam quod.
          </p>
        </div>
        <div className={'mt-3 ' + styles.projects__content}>
          <Slider />
        </div>
      </div>
    );
  }
}

export default Projects;
