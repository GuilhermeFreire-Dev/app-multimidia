"use client";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Carousel({images}) {

  const [responsiveSettings, setResponsiveSettings] = useState([
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]);

  return (
    <Slide
      slidesToShow={1}
      slidesToScroll={1}
      indicators={false}
      autoplay={true}
      transitionDuration={100}
      responsive={responsiveSettings}
      prevArrow={<LuChevronLeft size={32} className="bg-stone-200 text-stone-950 bg-opacity-70 rounded-full"></LuChevronLeft>}
      nextArrow={<LuChevronRight size={32} className="bg-stone-200 text-stone-950 bg-opacity-70 rounded-full"></LuChevronRight>}>
      {
        images.map((image) => {
          return (
            <div className="each-slide-effect mx-2" key={image.id}>
              <div className="w-full h-60 bg-cover rounded-2xl bg-no-repeat" style={{ "backgroundImage": `url('${image.url}')` }}>
                {/* <span>Slide 1</span> */}
              </div>
            </div>
          );
        })
      }
    </Slide>
  );
}