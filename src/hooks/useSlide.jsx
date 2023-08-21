// import { useState } from "react";

// export function useSlide(reference) {

//   const [isDragging, setIsDragging] = useState(false);
//   // const [startX, setStartX] = useState(0);
//   // const [scrollL, setScrollL] = useState(0);
//   let startX;
//   let scrollL;

//   function grab(e) {
//     setIsDragging(true);
//     startX = e.pageX - reference.current.offsetLeft;
//     scrollL = reference.current.scrollLeft;
//     console.log(e.pageX, reference.current.offsetLeft, reference.current.getBoundingClientRect());
//     reference.current.style.cursor = "grabbing";
//   }

//   function hovering() {
//     setIsDragging(false);
//     reference.current.style.cursor = "grab";
//   }

//   function moveSlide(e) {
//     if(!isDragging) return;
//     console.log(isDragging, startX, scrollL);
//     e.preventDefault();
//     let x = e.pageX - reference.current.offsetLeft;
//     let walk = (x - startX) * 1;
//     reference.current.scrollLeft = scrollL - walk;
//   }

//   return {
//     grab, 
//     hovering,
//     moveSlide
//   }

// };

// document.getElementById('slide')

export function useSlide(container) {

  var isDragging = false;
  var startX;
  var scrollLeft;

  // Iniciar arraste
  function grab (e) {
    isDragging = true;
    startX = e.pageX - container.current.offsetLeft;
    scrollLeft = container.current.scrollLeft;
    container.current.style.cursor = "grabbing";
  }

  // Parar arraste
  function hovering () {
    isDragging = false;
    container.current.style.cursor = "grab";
  }

  // Arrastar
  function moveSlide(e) {
    console.log(isDragging, startX, scrollLeft, container.current.scrollLeft, container.current.offsetLeft);
    if (!isDragging) return;
    e.preventDefault();
    var x = e.pageX - container.current.offsetLeft;
    var walk = (x - startX) * 4; // Ajuste a sensibilidade do arraste multiplicando por um valor
    container.current.scrollLeft = scrollLeft - walk;
  }

  return {
    grab,
    hovering,
    moveSlide
  }
}

