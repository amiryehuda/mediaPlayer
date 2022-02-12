import "./mediaPlayer.css";
import soundImg from "../files/icons/sound.png";
import muteImg from "../files/icons/mute.png";
import { useEffect, useState } from "react";
import { useLoopContext } from "../LoopProvider";

//Displays each line as a single audio
function AudioItem(props) {
  const loopContext = useLoopContext();

  const [icon, setIcon] = useState(soundImg);
  const [isSound, setIsSound] = useState(false);

  useEffect(() => {
    if (isSound) {
      setIcon(muteImg);
    } else {
      setIcon(soundImg);
    }
  }, [isSound]);

  const clickHanhleMute = () => {
    loopContext.handleAudioMute(props.index);
    setIsSound(!isSound);
  };

  return (
    <div className="audio-item">
      <p id="soundName" className="name-of-sound">
        {props.audio.title}
      </p>
      <button id="muteBtn" onClick={clickHanhleMute}>
        <img src={icon} className="sound-btn"></img>
      </button>
    </div>
  );
}

export default AudioItem;
