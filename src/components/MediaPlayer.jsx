import './mediaPlayer.css';
import { Fragment } from 'react/cjs/react.production.min';
import AudioContainer from './AudioContainer';
import PlayerContainer from './PlayerContainer';
import PlayerControl from './PlayerControl';
import { sounds } from '../soundClasses';

//The large frame that contains all the components
function MediaPlayer() {

    return (
        <Fragment>
            <section className="mp">
                <div className="containers">
                    <AudioContainer sounds={sounds} />
                    <PlayerContainer sounds={sounds} />
                </div>
                <PlayerControl />
            </section>
        </Fragment>
    );
};

export default MediaPlayer;