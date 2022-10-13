import React from "react"
import scss from './VideoPlayer.module.scss';

import Content from "./Content.jsx";
import SlideBar from "./SlideBar/SlideBar";
import Header from '../../components/Header/MyHeader';

export const VideoPlayer = () => {
  return (
    <div>
      <Header/>
      <div className={scss.wrapper}>
        <Content/>
        <SlideBar/>
      </div>
    </div>
  )
}