import React from "react";

import { SvgSelector } from "../../components";
import scss from './VideoContent.module.scss';

export const Video = ({ video }) => {

  const { views, likes, dislikes } = video

  const tools = [
    {
      nameSvg: 'Like',
      content: likes,
    },
    {
      nameSvg: 'Dislike',
      content: dislikes,
    },
    {
      nameSvg: 'Share',
      content: 'Share',
    }
  ]

  return (
    <div className={scss.wrapper}>
      <div className={scss.videoPlayer}>
        <img src={ video.videoUri } alt=''/>
      </div>
      
      <div className={scss.videoInfo}>

        <div className={scss.videoName}>{ video.name }</div>

        <div className={scss.moreInfo}>
          <div className={scss.views}>{ video.views } views</div>
          <div className={scss.toolsBar}>
            <div className={ scss.tools }>{
                tools.map(element => (
                  <div className={ scss.container }>
                    <SvgSelector className={scss.item} name={ element.nameSvg }/>
                    <div className={ scss.itemText }>{ element.content }</div>
                  </div>
                ))
              }
            </div>
            <SvgSelector name="MoreOptions" />
          </div>
        </div>

      </div>
    </div>
  );
}