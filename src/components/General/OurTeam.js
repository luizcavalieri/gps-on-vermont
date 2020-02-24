import React, { useState } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselItem,
  CarouselCaption,
  CarouselIndicators
} from "reactstrap";
import BusinessCard from "./BusinessCard";

const OurTeam = ({ staffData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === staffData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? staffData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  if (!staffData) return null;

  return (
    <>

    </>
  );
};

export default OurTeam;
