import React from "react";

import scss from './Content.module.scss';

import { Line } from '../../components';
import { Video } from './VideoContent';
import { Channel } from './ChannelContent';

const Content = () => {

  const content = {
    video: {
      videoUri: 'http://localhost:3000/video.png',
      name: 'Dude You Re Getting A Telescope',
      views: '123k',
      likes: '123k',
      dislikes: '435k',  
      datePublished: '14 Jun 2019',
      content: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. ',
    },
    channel: {
      profileUri: 'http://localhost:3000/channel.svg',
      name: 'Food & Drink',
      subscribers: '2.3m'
    }
  }

  return (
    <div className={scss.wrapper} >
      <Video video={content.video} />
      <Line backgroundColor="#D8D8D8" height="1px" width="1363px" marginTop="15px" />
      <Channel channel={content.channel} video={content.video} />
    </div>
  )
}

export default Content;