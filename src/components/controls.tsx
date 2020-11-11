import React, { ReactElement } from "react";

interface Props {
  play: () => void;
  pause: () => void;
  playing: boolean;
}

export const Controls = ({ play, pause, playing }: Props): ReactElement => {
  return (
    <div className={"controls"}>
      {playing ? (
        <button onClick={() => pause()}>Pause</button>
      ) : (
        <button onClick={() => play()}>Play</button>
      )}
    </div>
  );
};
