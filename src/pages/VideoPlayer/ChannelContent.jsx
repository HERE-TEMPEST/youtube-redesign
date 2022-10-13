import React from "react";

import scss from './Channel.module.scss';

export const Channel = ({ channel, video }) => {
  return (
    <div className={ scss.wrapper }>
      
      
      <div className={ scss.channelInfo }>
        <div>
          <img src={channel.profileUri} alt=''/>
        </div>

        <div className={ scss.info }>
          <div className={ scss.channelName }> { channel.name } </div>
          <div className={ scss.datePublished }> Published on { video.datePublished } </div>
          <div className={ scss.content }> { video.content } </div>
          <div className={ scss.showMore }> Show more </div>
        </div>
      </div>

      <div className={ scss.btnSubscribe }>
        <div className={ scss.text } >Subscribe { channel.subscribers }</div>
      </div>


    </div>
  )
}