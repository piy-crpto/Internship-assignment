import React from "react";
 import "./Image.css";
import { useState } from "react";
import Slidepart1 from "./Slidepart1";
import Slidepart2 from "./Slidepart2";
import Slidepart3 from "./Slidepart3";
function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // const slidesStyle = {
  //   backgroundImage: `url(${slides[currentIndex].url})`,
  // };

  function ans() {
    if (currentIndex === 0) {
      return <Slidepart1 />;
    } else if (currentIndex === 1) {
      return <Slidepart2 />;
    } else {
      return <Slidepart3 />;
    }
  }

  return (
    <>
      <div className="sliderStyle" onClick={goToPrevious}>
        <div className="leftViewStyle" onClick={goToNext}>
          ❰
        </div>

       

        <div className="rightViewStyle">❱</div>
      </div>

      <div className="slidesStyle">{ans()}</div>
    </>
  );
}

export default ImageSlider;

// {/* <img src={slides[currentIndex].url} alt="zxc" className=''/>  */}
