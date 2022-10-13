import React from 'react'
import scss from './MyHeader.module.scss'

import { SvgSelector } from '../SvgSelector'
import { SearchInput } from '../SearchInput';

const MyHeader = () => {

  const navigationBar = [
    {
      name: 'Camera',
      width: '27px',
      height: '20px',
    },
    {
      name: 'Tools',
      width: '21px',
      height: '21px',
    },
    {
      name: 'Bells',
      width: '22px',
      height: '26px',
    }
  ];

  const user = {
    profile: 'http://localhost:3000/profile.svg',
    amountNotifications: 3,
  };

  return (
    <div className={scss.wrapper}>        
        <div className={scss.componentOne}>
          <SvgSelector name="BurgerMenu" className={scss.burgerMenu}/>
          <div className={scss.searchBar} >
            <SvgSelector name="YoutubeLogo" className={scss.YoutubeLogo}/>
            <SearchInput/>    
          </div>
        </div>
        
        <div className={scss.componentTwo}>
          <div className={scss.navBar}>
            {
              navigationBar.map(element => (
                <SvgSelector
                  name={element.name}
                  style={{
                    width: element.width,
                    height: element.height
                  }}
                />
              ))
            }
          </div>
          <img className={scss.imageProfile} src={user.profile} alt=''/>
        </div>
    </div>
  )
}

export default MyHeader;