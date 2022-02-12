import { createContext, useContext, useState } from "react";
import { sounds } from "./soundClasses";

const LoopContext = createContext(null);
export const useLoopContext = () => useContext(LoopContext);

export const LoopProvider = ({ children }) => {
  const arrayOfPlaySounds = [true, true, true, true, true, true, true, true];

  //Play function
  const playSound = () => {
    arrayOfPlaySounds.forEach((soundIndex,index) => {
      soundIndex && sounds[index].sound.play();
    });
  };

  //Stop function (and reset)
  const stopSound = () => {
    arrayOfPlaySounds.forEach((soundIndex,index) => {
      sounds[index].sound.pause();
      sounds[index].sound.currentTime = 0;
    });
  };

  //Plays the music again if the button is pressed
  const loopAgain = (status) => {
    if (status) {
      arrayOfPlaySounds.forEach((soundIndex,index) => {
        sounds[index].sound.loop = true;
      });
    } else {
      arrayOfPlaySounds.forEach((soundIndex,index) => {
        sounds[index].sound.loop = false;
      });
    }
  };

  //Mute / unMute
  const handleAudioMute = (index) => {
    arrayOfPlaySounds[index] = !arrayOfPlaySounds[index];
    if (arrayOfPlaySounds[index]) {
      sounds[index].sound.volume = 1;
    } else {
      sounds[index].sound.volume = 0;
    }
  };


  return (
    <LoopContext.Provider
      value={{ playSound, loopAgain, stopSound, handleAudioMute }}
    >
      {children}
    </LoopContext.Provider>
  );
};
