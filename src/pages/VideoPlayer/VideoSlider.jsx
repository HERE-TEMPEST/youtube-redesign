import React from "react";
import classNames from "classnames";

import { VerticalSlider } from "../../components";
import scss from "./VideoSlider.module.scss";

export const VideoSlider = () => {
  const content = [
    {
      id: 1,
      name: "Baby Monitor Technology",
      views: "123k",
      channel: "Dollie Blair",
      picture: "http://localhost:3000/1.png",
    },
    {
      id: 2,
      name: "A Good Autoresponder",
      views: "123k",
      channel: "Dollie Blair",
      picture: "http://localhost:3000/2.png",
    },
    {
      id: 3,
      name: "Selecting The Right Hotel",
      views: "123k",
      channel: "Dollie Blair",
      picture: "http://localhost:3000/3.png",
    },
    {
      id: 4,
      name: "Baby Monitor Technology",
      views: "123k",
      channel: "Dollie Blair",
      picture: "http://localhost:3000/4.png",
    },
    {
      id: 5,
      name: "Selecting The Right Hotel",
      views: "123k",
      channel: "Dollie Blair",
      picture: "http://localhost:3000/3.png",
    },
  ];

  return (
    <div className={scss.wrapper}>
      <div className={scss.header}>
        <div className={scss.text}>Next</div>

        <div className={scss.autoPlay}>
          <div className={scss.text}>AUTOPLAY</div>
          <label className={scss.switch}>
            <input type="checkbox" />
            <span className={classNames(scss.slider, scss.round)}></span>
          </label>
        </div>
      </div>

      <div className={scss.videoSlider}>
        <VerticalSlider>
          {content.map((element) => {
            return (
              <div className={scss.slider_container_item}>
                <img
                  className={scss.image}
                  src={element.picture}
                  key={element.id}
                  alt=""
                ></img>
                <div className={scss.text}>{element.name}</div>
                <div className={scss.additionalInfo}>
                  <div className={scss.text}>{element.views} views</div>
                  <div className={scss.text}>{element.channel}</div>
                </div>
              </div>
            );
          })}
        </VerticalSlider>
      </div>
    </div>
  );
};
