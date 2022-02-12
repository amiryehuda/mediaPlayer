import './mediaPlayer.css';
import React, { Component } from 'react/cjs/react.production.min';
import PlayerItem from './PlayerItem';

//Right side - present the channels currently playing
function PlayerContainer({ sounds }) {
    const colors = ["maroon", "purple", "yellow", "darkgreen", "aqua", "blueviolet", "chocolate", "crimson", "deeppink"];
    return (
        <section className="player-container">
            {
                sounds.map((sound, i) => {
                    return <PlayerItem audio={sound} index={i} key={i} color={colors[i]} />
                })
            }
        </section>
    );
};

export default PlayerContainer;