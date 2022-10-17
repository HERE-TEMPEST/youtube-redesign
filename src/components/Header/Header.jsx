import React from "react";
import scss from "./Header.module.scss";

import { SvgSelector } from "../Svg";

export const Header = () => {
  const navigationBar = [
    {
      name: "Camera",
      width: "27px",
      height: "20px",
    },
    {
      name: "Tools",
      width: "21px",
      height: "21px",
    },
    {
      name: "Bells",
      width: "22px",
      height: "26px",
    },
  ];

  const user = {
    profile: "http://localhost:3000/profile.svg",
    amountNotifications: 3,
  };

  return (
    <header className={scss.wrapper}>
      <div className={scss.navigations}>
        <SvgSelector name="BurgerMenu" className={scss.burgerMenu} />
        <div className={scss.search}>
          <SvgSelector name="YoutubeLogo" className={scss.youtubeLogo} />

          <div className={scss.input}>
            <input
              type="text"
              className={scss.font}
              placeholder="Search"
            ></input>
            <SvgSelector name="Loupe" className={scss.search} />
          </div>
        </div>
      </div>

      <div className={scss.tools}>
        <div className={scss.searchLoupe}>
          <SvgSelector name="Loupe" />
        </div>
        <div className={scss.moreTools}>
          <SvgSelector name="MoreTools" className={scss.moreTools} />
        </div>

        <div className={scss.navBar}>
          {navigationBar.map((element) => (
            <SvgSelector
              name={element.name}
              style={{
                width: element.width,
                height: element.height,
              }}
            />
          ))}
        </div>
        <div className={scss.imageProfile}>
          <img src={user.profile} alt="" />
        </div>
      </div>
    </header>
  );
};
