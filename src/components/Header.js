import React, { useState } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
// icon-imports
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
            alt="Youtube Logo"
          />
        </Link>
      </div>

      <div className="header__centerInput">
        <input
          value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__searchIcon" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="My Avatar"
          src="https://avatars1.githubusercontent.com/u/33411046?s=60&v=4"
        />
      </div>
    </div>
  );
}

export default Header;
