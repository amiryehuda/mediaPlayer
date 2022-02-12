import './mediaPlayer.css';
import { Component } from 'react/cjs/react.development';
import { useState } from "react";
import { useLoopContext } from '../LoopProvider';

function PlayerItem(props){
    const loopContext = useLoopContext();
    const uniqueColor = props.color;

    return (
        <div className='player-item' style={{borderColor: uniqueColor}}>
            <p id='soundName' className='name-of-sound'>{props.audio.title}</p>
        </div>
    );
};

export default PlayerItem;