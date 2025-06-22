import { useState } from "react";
import * as S from "./styled/styled";
import ImageViewer from "../ImageViewer/ImageViewer";

function Carousel({ graphs }) {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? graphs.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === graphs.length - 1 ? 0 : prev + 1));
  };

  const { title, src } = graphs[index];

  return (
    <S.CarouselContainer>
      <button onClick={prevSlide}>{"<"}</button>

      <S.GraphBox>
        <ImageViewer src={src} width="400px" height="350px" />
        <span>{title}</span>
      </S.GraphBox>

      <button onClick={nextSlide}>{">"}</button>
    </S.CarouselContainer>
  );
}

export default Carousel;
