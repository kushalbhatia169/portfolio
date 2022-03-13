import React, { PureComponent } from 'react';
import Image from 'next/image';
import styles from './home.module.scss';
import myImage from '../../public/images/fullImage.jpg';

class About extends PureComponent {

  render() {
    return (
      <div className={styles.about}>
        <div className={styles.about__heading}>
          <h1>About Me</h1>
        </div>
        <div className={styles.about__container}>
          <div className={styles.about__text_div}>
            <div className={styles.about__info}>
              <h4>Hi, I&apos;m Kushal Bhatia</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris ipsum sit nibh amet egestas tellus. Eu leo morbi massa
                sem faucibus nulla gravida arcu ante sollicitudin orci nunc gravida.
              </p>
            </div>
            <div className={styles.about__info}>
              <h4>What is my skill level?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris ipsum sit nibh amet egestas tellus. Eu leo morbi massa
                sem faucibus nulla gravida arcu ante sollicitudin orci nunc gravida.
              </p>
            </div>
            <div className={styles.about__progress}>
              <ProgressBar skill="Java Script" level="85%" />
              <ProgressBar skill="React.js" level="90%" />
              <ProgressBar skill="Node.js" level="75%" />
              <ProgressBar skill="Mongo DB" level="65%" />
              <ProgressBar skill="Git" level="85%" />
              <ProgressBar skill="Sass" level="80%" />
            </div>
          </div>
          <div className={styles.about__image}>
            <div className={styles.about__image__div}>
              <Image src={myImage} alt="about" height={650} width={600} />
            </div>
            <div className={styles.about__experience}>
              <h3>2+ Years</h3>
              <span>of Experience</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface propsProgressBar {
  skill: string;
  level: string;
}

const ProgressBar = (props: propsProgressBar) => {
  const { skill, level } = props;
  return (<div className={styles.about__progress_content}> <span>{skill}</span>
    <style jsx>
      {`
      .progress {
        border: 1px solid #7e7e7e;
        padding: 2px;
      }
      .progress-bar {
        width: ${level};
        background-color: #34495e;
      }
    `}
    </style>
    <div className="progress mt-2">
      <div className="progress-bar" role="progressbar" title={level}>
      </div>
    </div> </div>
  );
};
export default About;
