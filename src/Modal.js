import { useState } from "react";
import styled from "styled-components";

export const Modal = ({ side }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn id="modalBtn" onClick={openModalHandler}>
          {isOpen === false ? "Open Modal" : "Opened!"}
        </ModalBtn>
        {isOpen === true ? (
          <ModalBackdrop
          //onClick={openModalHandler}
          >
            <ModalView>
              <BtsDiv>
                <ModalCloseBtn onClick={openModalHandler}>X</ModalCloseBtn>
              </BtsDiv>
              <div>{side}</div>
            </ModalView>
          </ModalBackdrop>
        ) : (
          ""
        )}
      </ModalContainer>
    </>
  );
};

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalBtn = styled.button`
  background-color: midnightblue;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalCloseBtn = styled.button`
  background-color: black;
  text-decoration: none;
  border: none;
  padding: 10px, 20px, 10px, 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
  justify-content: right;
`;

export const ModalView = styled.div`
  background: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  border: 1px solid black;
  width: 300px;
  height: 300px;
  position: relative;
  top: -200px;
  left: -300px;
  padding: 10px;
`;

export const BtsDiv = styled.div`
  display: flex;
  justify-content: right;
`;
