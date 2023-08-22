import "./Lazy.scss";

import { useEffect, useRef, useState } from "react"

const Lazy = ({src, alt, rounded, wsm, hsm, wxs, hxs}) => {
  
  const [isLazing, setIsLazing] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const imageLazy = useRef(null);
  const imageT = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setIsLoading(false);
          imageT.current.onload = () => {
            if(entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              setIsLazing(false);
              observer.unobserve(imageLazy.current);
            }
          }
        }
      });
  
    }, { threshold: 0.3, rootMargin: "0px 50% 0px 50%" });

    observer.observe(imageLazy.current);
  }, []);
  
  return (
    <div className={`lazy-container ${wsm && hsm ? `sm:w-${wsm} sm:h-${hsm}` : ""} w-${wxs} h-${hxs}`} ref={imageLazy}>
      { isLazing && 
        <div className={`${wsm && hsm ? `sm:w-${wsm} sm:h-${hsm}` : ""} w-${wxs} h-${hxs}`}></div> }

        <img src={!isLoading ? src : ""} alt={alt} ref={imageT} className={`${!isLazing ? "block" : "hidden indent-10"} w-full h-auto ${rounded ? "rounded-full" : "rounded-md"}`} />
    </div>
  )
}

export default Lazy