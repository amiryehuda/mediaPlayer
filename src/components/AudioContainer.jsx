import './mediaPlayer.css';
import React, { Component } from 'react/cjs/react.production.min';
import AudioItem from './AudioItem';

//Left side - contains the playback files 
function AudioContainer({ sounds }) {
    return (
        <section className="audio-container">
            {
                sounds.map((sound, i) => {
                    return <AudioItem audio={sound} index={i} key={i}/>
                })
            }
        </section>
    );
};

export default AudioContainer;