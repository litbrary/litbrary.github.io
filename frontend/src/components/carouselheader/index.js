import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCarousel from "../cardcarouselheader";

export default function CarouselHeader () {
  return (
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={4000}
        centerMode
        draggable
        focusOnSelect
        infinite
        minimumTouchDrag={80}
        pauseOnHover
        responsive={{
          desktop: {
            breakpoint: {
              max: 5000,
              min: 1024
            },
            items: 1,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
          }
        }}
        rtl={false}
        customTransition="transform 1.5s ease"
        transitionDuration={1500}
        showDots={false}
        slidesToSlide={1}
        swipeable
        >
        <CardCarousel index={0} image="http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg" title="Discover Creativity" text="The Art Book"/>
        <CardCarousel index={1}image="http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg" title="Discover Creativity" text="The Art Book"/>
        <CardCarousel index={2} image="http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg" title="Discover Creativity" text="The Art Book"/>
      </Carousel>
  );
};
