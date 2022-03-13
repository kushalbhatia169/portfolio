/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Button } from '@mui/material';
import uhro_logo from '../../public/images/unicorn_logo.png';
import epson from '../../public/images/epson-logo.png';
import chat from '../../public/images/chat.png';
import exam from '../../public/images/exam.png';
import { useRouter } from 'next/router';

type handleClickFunc = (index: number) => void;

const getItems = () =>
  Array(4)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const HorizontalScroll = () => {
  const [items] = React.useState(getItems);
  const image: StaticImageData[] = [uhro_logo, epson, chat, exam];
  const title: string[] = ['Unicorn HRO', 'Epson Portland', 'Chat App', 'Exam Portal'];
  const link: string[] = ['https://stgemp2.unicornhro.com', '', 'https://baatcheet-77.herokuapp.com/home', 'https://exam-portel.herokuapp.com/'];
  const router = useRouter();

  const handleClick: handleClickFunc = (index) => {
    router.push({ pathname: '/work', query: { id: index } });
  };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }, index) => (
        <Card
          title={title[index]}
          key={id}
          onClick={() => handleClick(index)}
          image={image[index]}
          link={link[index]}
        />
      ))}
    </ScrollMenu>
  );
};

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <ArrowLeft />
    </Button>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Button disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <ArrowRight />
    </Button>

  );
};

type cardProps = {
  onClick: (param: unknown) => void,
  title: string,
  image: StaticImageData,
  link: string,
}

const Card = ({ onClick, image, link, title }: cardProps) => {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      tabIndex={0}
    >
      <style jsx>
        {`
                .card {
                    margin: 50px;
                    width: 333px;
                    height: 333px;
                    border-radius: 10%; 
                    cursor: pointer;
                }

                @media screen and (max-width: 768px) {
                    .card {
                       margin-left: 20px; 
                    }   
                }
                .card_content {
                    width: 333px;
                    margin-left: 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .project_image {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url('${image.src}');
                    background-size: cover;
                    width: 333px;
                    height: 333px;
                    border-radius: 10%;
                }

                .project_image:hover, .card:hover {
                    width: 400px;
                    height: 400px;
                    border: 1px solid goldenrod;
                    -webkit-transition: all .3s ease;
                    -moz-transition: all .3s ease;
                    -ms-transition: all .3s ease;
                    -o-transition: all .3s ease;
                    transition: all .3s ease;
                }
                span {
                    font-size: 20px;
                    display: inline-block;
                }
                del {
                    color: #7E7E7E; 
                }
                a {
                    text-decoration: none;
                    color: #7E7E7E;
                    position: relative;
                    display: inline-block;
                    -webkit-transition: all .3s ease;
                    -moz-transition: all .3s ease;
                    -ms-transition: all .3s ease;
                    -o-transition: all .3s ease;
                    transition: all .3s ease;
                }
                a::before, .strike-p::before {
                    position: relative;
                    content: ".";
                    font-size: 40px;
                    top: -3px;
                    color: #7e7e7e;
                    padding: 0px 5px;
                }
                h3 {
                    text-decoration: none;
                    color: #34495E;
                    font-size: 36px;
                    font-weight: 700;
                    -webkit-transition: all .3s ease;
                    -moz-transition: all .3s ease;
                    -ms-transition: all .3s ease;
                    -o-transition: all .3s ease;
                    transition: all .3s ease;
                }

            `}
      </style>
      <div className="card">
        <div className="project_image" />
      </div>
      <div className="card_content">
        <div className="news_details">
          <span>Project {link ? <a href={link} target="_blank" rel="noreferrer">
            Visit Website</a> : <span className="strike-p"><del>Visit Website</del></span>}</span>
          <h3 className="title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;