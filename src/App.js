import "./App.css";
import { Modal } from "./Modal.js";
import { Carousel } from "./Carousel.js";
import { RadioButton } from "./RadioButton.js";
function App() {
  return (
    <div className="modal">
      <div>
        <div>{/* <Modal side={"What i want to input"} /> */}</div>
        <div>
          <RadioButton text={"출석 하셨나요?"} value={"top"} />
          {/* <RadioButton text={"수업은 잘 들으셨나요?"} value={"middle"} />
          <RadioButton text={"컴포넌트도 만드셨나요?"} value={"bottom"} /> */}
        </div>
      </div>
      <div>{/* <Carousel /> */}</div>
    </div>
  );
}

export default App;
