import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slide = ({children}) => {
  return (
    <Carousel>
      {children}
    </Carousel>
  )
}

export default Slide