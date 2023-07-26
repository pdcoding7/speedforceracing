import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { gp1Slider, gp2Slider } from "../data";
import DivisionTitle from "./DivisionTitle";

const Splider = () => {
  return (
    <>
      <DivisionTitle division="Div 1" />
      <Splide options={{ rewind: true, gap: "1rem" }}>
        {gp1Slider.map((slide) => {
          const { id, imgPath, desc } = slide;
          return (
            <SplideSlide key={id}>
              <div className="galleryImage">
                <img src={imgPath} alt={desc} />
              </div>
              <div className="imgDesc">
                <p>{desc}</p>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <DivisionTitle division="Div 2" />
      <Splide options={{ rewind: true, gap: "1rem" }}>
        {gp2Slider.map((slide) => {
          const { id, imgPath, desc } = slide;
          return (
            <SplideSlide key={id}>
              <div className="galleryImage">
                <img src={imgPath} alt={desc} />
              </div>
              <div className="imgDesc">
                <p>{desc}</p>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
};
export default Splider;
