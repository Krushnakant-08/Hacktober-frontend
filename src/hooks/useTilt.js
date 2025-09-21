import { useState } from 'react';

export const useTilt = (options = {}) => {
  const {
    max = 15,
    perspective = 1000,
    scale = 1.05,
    speed = 300,
  } = options;

  const [style, setStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`,
    transition: `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)`,
  });

  const onMouseMove = (event) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPercent = (mouseX / width) * 2 - 1;
    const yPercent = (mouseY / height) * 2 - 1;
    const rotateX = ((yPercent * -max) / 2).toFixed(2);
    const rotateY = ((xPercent * max) / 2).toFixed(2);

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      transition: `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)`,
    });
  };

  const onMouseLeave = () => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: `transform ${speed}ms cubic-bezier(.03,.98,.52,.99)`,
    });
  };

  return {
    style,
    onMouseMove,
    onMouseLeave,
  };
};