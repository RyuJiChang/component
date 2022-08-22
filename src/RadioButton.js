import { useState } from "react";
import styled from "styled-components";

export const RadioButton = ({ value, text }) => {
  const [nums, setNums] = useState(0);

  return (
    <>
      <Body>
        <div className="container">
          <p>{text}</p>
          <div>
            <label>
              <input type="radio" name={value}></input>
              <b>Yes</b>
            </label>
            <label>
              <input type="radio" name={value}></input>
              <b>No</b>
            </label>
            <label>
              <input type="radio" name={value}></input>
              <b>Yes</b>
            </label>
            <label>
              <input type="radio" name={value}></input>
              <b>No</b>
            </label>
          </div>
        </div>
      </Body>
    </>
  );
};

export const Body = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  /* height: 60vh;
  width: 40vw; */
  /* height: 30vh;
  width: 30vw; */
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: bisque;

  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 60vh; */

  background: #091921;

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  p {
    color: #215e65;
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  label {
    position: relative;
  }
  label input {
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
  }
  label b {
    position: relative;
    width: 40px;
    height: 40px;
    background-color: #091921;
    line-height: 40px;
    text-align: center;
    padding: 5px;
    margin: 0 4px;
    color: #6f6f6f;
    font-size: 8px;
    border-radius: 50%;
    box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.8);
  }
  label b:hover {
    box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.8),
      inset -2px -2px 10px rgba(255, 255, 255, 0.05),
      inset 2px 2px 10px rgba(0, 0, 0, 0.5);
  }
  label input:checked ~ b {
    color: #00fff1;
    box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.1),
      inset 2px 2px 6px rgba(0, 0, 0, 1);
    text-shadow: 0 0 5px #00fff1, 0 0 20px #00fff1;
  }

  /* label input:checked ~ b {
    color: deeppink;
    box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.1),
      inset 2px 2px 6px rgba(0, 0, 0, 1);
    text-shadow: 0 0 5px deeppink, 0 0 20px deeppink;
  }

  label input:checked ~ b {
    color: Yellow;
    box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.1),
      inset 2px 2px 6px rgba(0, 0, 0, 1);
    text-shadow: 0 0 5px Yellow, 0 0 20px Yellow;
  } */
`;
