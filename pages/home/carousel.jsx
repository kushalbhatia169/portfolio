import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaAward, FaDev, FaMoneyBill } from 'react-icons/fa';
import slider from './home.module.scss';

function Slider() {
  return (
    <div className={`${slider.slider_main} ms-5`}>
      <Carousel>
        <CarouselItem>
          <div className="d-flex flex-column flex-wrap justify-content-center">
            <div className="d-flex flex-wrap justify-content-center">
              <FaMoneyBill size={70} />
            </div>
            <h5 className={`mt-5  ${slider.slider_main__text}`}>
              Got an out of turn promotion from HR Department of JKTECH for contribution in Project.
            </h5>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="d-flex flex-column flex-wrap justify-content-center">
            <div className="d-flex flex-wrap justify-content-center">
              <FaDev size={70} />
            </div>
            <h5 className={`mt-5  ${slider.slider_main__text}`}>
              Created website using MERN stack. Available for full stack development also.
            </h5>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="d-flex flex-column flex-wrap justify-content-center">
            <div className="d-flex flex-wrap justify-content-center">
              <FaAward size={70} />
            </div>
            <h5 className={`mt-5  ${slider.slider_main__text}`}>
              Got an award from hr for contributing to the project in JKTECH.
            </h5>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

function CarouselItem({ children, width }) {
  return (
    <div className={slider.carousel_item} style={{ width }}>
      {children}
    </div>
  );
}

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (indexData) => {
    let newIndex = indexData;
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    }
    else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className={`${slider.carousel} ms-5 mt-4`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={slider.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => React.cloneElement(child, { width: '100%' }))}
      </div>
      <div className={slider.indicators}>
        {React.Children.map(children, (index) => (
          <button
            type="button"
            aria-label="button"
            className={`${slider.carousel_button} ${index === activeIndex ? slider.active : null}`}
            onClick={() => {
              updateIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
