import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardBook from "../cardbook";
export default function CarouselHeader (props) {

    
  return (
    <Carousel
  additionalTransfrom={0}
  arrows
  centerMode={false}
  className=""
  dotListClass=""
  draggable={false}
  focusOnSelect={false}
  infinite
  itemClass="carousel-item-padding-40-px"
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    largedesktop: {
      breakpoint: {
        max: 3000,
        min: 1735
      },
      items: 4,
    },
    desktop: {
      breakpoint: {
        max: 1735,
        min: 1024
      },
      items: 3,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1120,
        min: 464
      },
      items: 2,
    }
  }}
  containerClass="carousel-container"
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
        {props.data.map((item, index) => (
            <CardBook key={item.id} id={item.id} index={index} image={item.imgUrl} title={item.title} author={item.author}/>
        ))}
      </Carousel>
  );
};