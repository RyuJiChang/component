import { useState } from "react";
import styled from "styled-components";
// import dog from "./dog.jpeg";

export const Carousel = () => {
  const [nums, setNums] = useState(0);
  const anotherimg = (event) => {
    setNums(event.target.value * -60);
    console.log(event.target.value);
  };

  return (
    <>
      <Body>
        <CarouselContainer nums={nums}>
          <ImgDiv>
            <img
              style={{ width: "60vw", height: "100%", float: "left" }}
              src={process.env.PUBLIC_URL + `/rabbit.gif`}
            />
          </ImgDiv>
          <ImgDiv>
            <img
              style={{ width: "60vw", height: "100%", float: "left" }}
              src={process.env.PUBLIC_URL + `/dog.jpeg`}
            />
          </ImgDiv>
          <ImgDiv>
            <img
              style={{ width: "60vw", height: "100%", float: "left" }}
              src={process.env.PUBLIC_URL + `/cat.jpeg`}
            />
          </ImgDiv>
          <ImgDiv>
            <img
              style={{ width: "60vw", height: "100%", float: "left" }}
              src={process.env.PUBLIC_URL + `/no.jpeg`}
            />
          </ImgDiv>
          <ImgDiv>
            <img
              style={{ width: "60vw", height: "100%", float: "left" }}
              src={process.env.PUBLIC_URL + `/wonyoung.gif`}
            />
          </ImgDiv>
        </CarouselContainer>
        <ButtonContainer>
          <Buttons value={0} onClick={anotherimg} />
          <Buttons value={1} onClick={anotherimg} />
          <Buttons value={2} onClick={anotherimg} />
          <Buttons value={3} onClick={anotherimg} />
          <Buttons value={4} onClick={anotherimg} />
        </ButtonContainer>
      </Body>
    </>
  );
};

export const CarouselContainer = styled.div`
  display: flex;
  width: 500%;
  transform: translate(${(props) => props.nums}vw);
  transition: transform 0.2s;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  height: 45vw;
  width: 60vw;
  overflow: hidden;
`;

export const ImgDiv = styled.div``;

export const Buttons = styled.button`
  /* background-color: salmon; */
  width: 60px;
  height: 20px;
  margin-left: 10px;
  border-radius: 25%;
  border-color: white;
`;
