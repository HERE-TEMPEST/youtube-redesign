import React from "react";
import scss from "./VideoPlayer.module.scss";

import { Content } from "./Content.jsx";
import { VideoSlider } from "./VideoSlider";

export const VideoPlayer = () => {
  return (
    <div>
      <div className={scss.wrapper}>
        <Content />
        <VideoSlider />
      </div>
    </div>
  );
};
