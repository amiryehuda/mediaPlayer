import "./mediaPlayer.css";
import './slider.css';
import { useState, useEffect, useRef } from "react";
import play_icon from "../files/icons/play_icon.png";
import stop_icon from "../files/icons/stop_icon.png";
import loop_icon from "../files/icons/loop_icon.png";
import { useLoopContext } from "../LoopProvider";

const PlayerControl = () => {
  const loopContext = useLoopContext();

  const progressBar = useRef();
  const [classN, setClassN] = useState("btn");
  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    if (isLoop) {
      setClassN("pushed");
    } else {
      setClassN("btn");
    }
  }, [isLoop]);
  

  //click handlers
  const playClickHandler = () => {
    loopContext.playSound();
  };

  const stopClickHandler = () => {
    loopContext.stopSound();
  };

  const loopClickHandler = () => {
      loopContext.loopAgain(!isLoop);
      setIsLoop(!isLoop);
  };




  return (
    <div className="player-controls-container containers">
      <div className="buttons">
        <button id="play" className="btn">
          <img src={play_icon} alt="play" onClick={playClickHandler} />
        </button>

        <button id="stop" className="btn">
          <img src={stop_icon} alt="stop" onClick={stopClickHandler} />
        </button>

        <button id="loop" className={classN}>
          <img src={loop_icon} alt="loop" onClick={loopClickHandler} />
        </button>
      </div>
    </div>
  );
};

export default PlayerControl;
