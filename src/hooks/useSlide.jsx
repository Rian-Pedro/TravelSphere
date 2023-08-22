import { useState } from "react";

export function useSlide(reference) {

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - e.currentTarget.offsetLeft);
      setScrollLeft(e.currentTarget.scrollLeft);
      e.currentTarget.style.cursor = "grabbing";
    };
  
    const handleMouseUp = (e) => {
      setIsDragging(false);
      e.currentTarget.style.cursor = "grab";
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - e.currentTarget.offsetLeft;
      const walk = (x - startX) * 1.5; // Ajuste a sensibilidade do arraste multiplicando por um valor
      e.currentTarget.scrollLeft = scrollLeft - walk;
    };

  return {
    handleMouseDown, 
    handleMouseUp,
    handleMouseMove
  }

};