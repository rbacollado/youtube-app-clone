import React from "react";
import ChannelRow from "../components/ChannelRow";
import VideoRow from "../components/VideoRow";
import TuneIcon from "@material-ui/icons/Tune";
import "../styles.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
        channel="Channel 1"
        verified
        subs="2m"
        noOfVideos={32}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <hr />

      <VideoRow
        views="1.4m"
        subs="123k"
        description="Hey Do you want FREE one Here?"
        timestamp="a minute ago"
        channel="Channel 1"
        title="PUBG Gaming Live"
        image="https://i.pinimg.com/originals/a2/10/dd/a210dd7a861f3dfabc7e988528237332.jpg"
      />

      <VideoRow
        views="1.4m"
        subs="123k"
        description="Hey Do you want FREE one Here?"
        timestamp="a minute ago"
        channel="Channel 1"
        title="PUBG Gaming Live"
        image="https://i.pinimg.com/originals/a2/10/dd/a210dd7a861f3dfabc7e988528237332.jpg"
      />

      <VideoRow
        views="1.4m"
        subs="123k"
        description="Hey Do you want FREE one Here?"
        timestamp="a minute ago"
        channel="Channel 1"
        title="PUBG Gaming Live"
        image="https://i.pinimg.com/originals/a2/10/dd/a210dd7a861f3dfabc7e988528237332.jpg"
      />

      <VideoRow
        views="1.4m"
        subs="123k"
        description="Hey Do you want FREE one Here?"
        timestamp="a minute ago"
        channel="Channel 1"
        title="PUBG Gaming Live"
        image="https://i.pinimg.com/originals/a2/10/dd/a210dd7a861f3dfabc7e988528237332.jpg"
      />
    </div>
  );
}

export default SearchPage;
