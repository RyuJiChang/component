import { useState } from "react";
import styled from "styled-components";

export const Slider = () => {
  const [value, setValue] = useState(50);
  const [show, setShow] = useState("");
  const [nums, setNums] = useState(0);

  function eventHandler(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
    if (e.target.value >= 90) {
      setNums(e.target.value - 50);
    } else if (e.target.value >= 80) {
      setNums(e.target.value - 50);
    } else if (e.target.value >= 70) {
      setNums(e.target.value - 49);
    } else if (e.target.value >= 60) {
      setNums(e.target.value - 48);
    } else if (e.target.value >= 50) {
      setNums(e.target.value - 47);
    } else if (e.target.value >= 40) {
      setNums(e.target.value - 46);
    } else if (e.target.value >= 30) {
      setNums(e.target.value - 45);
    } else if (e.target.value >= 20) {
      setNums(e.target.value - 44);
    } else if (e.target.value >= 10) {
      setNums(e.target.value - 43);
    } else {
      setNums(e.target.value - 43);
    }
  }

  function inputHandler(e) {
    // console.log("input");
    setShow("show");
  }

  function blurHander(e) {
    // console.log("blur");
    setShow("");
  }
  return (
    <Body nums={nums}>
      <div className="range">
        <div className="sliderValue">
          <span className={show}>{value}</span>
        </div>
        <div className="field">
          <div className="value left">0</div>
          <input
            type="range"
            min="0"
            max="100"
            steps="1"
            onChange={eventHandler}
            onInput={inputHandler}
            onBlur={blurHander}
          ></input>
          <div className="value right">100</div>
        </div>
      </div>
    </Body>
  );
};
export const Body = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  display: grid;
  height: 100%;
  width: 100%;
  text-align: center;
  place-items: center;
  background: #664aff;

  .range {
    height: 80px;
    width: 380px;
    background: #fff;
    border-radius: 10px;
    padding: 0 65px 0 45px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  }
  .sliderValue {
    position: relative;
    width: 100%;
    left: ${(props) => props.nums}%;
  }
  .sliderValue span {
    position: absolute;
    height: 45px;
    width: 45px;
    transform: translateX(-70%) scale(0);
    font-weight: 500;
    top: -40px;
    line-height: 55px;
    z-index: 2;
    color: #fff;
    transform-origin: bottom;
    transition: transform 0.3s ease-in-out;
  }
  .sliderValue span.show {
    transform: translateX(-70%) scale(1);
  }
  .sliderValue span:after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: #664aff;
    border: 3px solid #fff;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-bottom-left-radius: 50%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
  }
  .field .value {
    position: absolute;
    font-size: 18px;
    color: #664aff;
    font-weight: 600;
  }
  .field .value.left {
    left: -22px;
  }
  .field .value.right {
    right: -43px;
  }
  .range input {
    -webkit-appearance: none;
    width: 100%;
    height: 3px;
    background: #ddd;
    border-radius: 5px;
    outline: none;
    border: none;
    z-index: 2222;
  }
  .range input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
    background: #664aff;
    border: 1px solid #664aff;
    cursor: pointer;
  }
`;
// export const Body = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #664aff;
//   .range {
//     height: 80px;
//     width: 380px;
//     background-color: #fff;
//     border-radius: 10px;
//     padding: 0 65px 0 45px;
//   }
//   .range .sliderValue {
//     position: relative;
//     width: 100%;
//   }
//   .range .sliderValue span {
//     position: absolute;
//     height: 45px;
//     width: 45px;
//     /* background-color: #664aff; */
//     color: #fff;
//     font-weight: 500;
//     top: -40px;
//     transform: translateX(-50%);
//     line-height: 55px;
//     z-index: 2;
//   }
//   .range .sliderValue span:after {
//     position: absolute;
//     content: "";
//     height: 45px;
//     width: 45px;
//     background: #664aff;
//     left: 50%;
//     transform: translateX(-50%) rotate(45deg);
//     border: 3px solid #fff;
//     z-index: -1;
//     border-top-left-radius: 50%;
//     border-top-right-radius: 50%;
//     border-bottom-left-radius: 50%;
//   }

//   .field {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100%;
//   }
//   .range .field {
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100%;
//   }
//   .range .field .value {
//     position: absolute;
//     font-size: 18px;
//     font-weight: 600;
//     color: #664aff;
//   }
//   .range .field .value.left {
//     left: -22px;
//   }
//   .range .field .value.right {
//     right: -43px;
//   }
//   .range .field input {
//     -webkit-appearance: none;
//     height: 3px;
//     width: 100%;
//     background-color: #ddd;
//     border-radius: 5px;
//     outline: none;
//     border: none;
//   }
//   .range .field input::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     height: 20px;
//     width: 20px;
//     background-color: #664aff;
//     border-radius: 50%;
//     border: 1px solid #664aff;
//     cursor: pointer;
//   }
// `;
