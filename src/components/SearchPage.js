import React from "react";
import ChannelRow from "../components/ChannelRow";
import VideoRow from "../components/VideoRow";
import TuneIcon from "@material-ui/icons/Tune";
import "../styles.css";
import { v4 as uuidv4 } from "uuid";
import data from "../searchPage.js";

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
      {data.map((sampleData) => (
        <VideoRow
          key={uuidv4()}
          views={sampleData.views}
          subs={sampleData.subs}
          description={sampleData.description}
          timestamp={sampleData.timestamp}
          channel={sampleData.channel}
          title={sampleData.title}
          image={sampleData.image}
        />
      ))}
    </div>
  );
}

export default SearchPage;
