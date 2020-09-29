import React from 'react';

import { convertCurrentTime } from "utils/helpers";

import audioWaveSvg from 'assets/img/audio-wave.svg';
import audioPlaySvg from 'assets/img/audio-pause.svg';
import audioPauseSvg from 'assets/img/audio-play.svg';

const MessageAudio = ({audio}) => {
  const audioElement = React.useRef(null);
  const [isPlay, setPlay] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const audioTimeUpdateHandler = () => {
    setCurrentTime(audioElement.current.currentTime);
    const duration = audioElement.current.duration;
    setProgress((audioElement.current.currentTime / duration) * 100);
  };
  const audioPlayHandler = () => {
    setPlay(true);
  };
  const audioPauseHandler = () => {
    setPlay(false);
  };
  const audioEndHandler = () => {
    setPlay(false);
    setCurrentTime(0)
    setProgress(0)
  };

  const toggleAudio = () => {
    if (isPlay) {
      audioElement.current.pause();
    } else {
      audioElement.current.play();
    }
  };

  return (
    <div className="message__audio">
      <audio onPlaying={audioPlayHandler}
             onPause={audioPauseHandler}
             onTimeUpdate={audioTimeUpdateHandler}
             onEnded={audioEndHandler}
             ref={audioElement}
             src={audio}
             preload="auto"/>
      <div className="message__audio-progress" style={{width: `${progress}%`}}/>
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={toggleAudio}>
            {isPlay ? (
              <img src={audioPlaySvg} alt="Icon play"/>
            ) : (
              <img src={audioPauseSvg} alt="Icon pause"/>
            )
            }
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={audioWaveSvg} alt="Audio Wave"/>
        </div>
        <span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
      </div>
    </div>
  )
};

export default MessageAudio;
