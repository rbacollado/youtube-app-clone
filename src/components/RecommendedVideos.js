import React from "react";
import "../styles.css";
import VideoCard from "./VideoCard.js";
import sampleData from "../recommendedVids.js";
import { v4 as uuidv4 } from "uuid";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h1>Recommended</h1>
      <div className="recommendedVideos__videos">
        {sampleData.map((videos) => (
          <VideoCard
            key={uuidv4()}
            image={videos.image}
            title={videos.title}
            channel={videos.channel}
            views={videos.views}
            timestamp={videos.timestamp}
            channelImage={videos.channelImage}
          />
        ))}
        {sampleData.map((videos) => (
          <VideoCard
            key={uuidv4()}
            image={videos.image}
            title={videos.title}
            channel={videos.channel}
            views={videos.views}
            timestamp={videos.timestamp}
            channelImage={videos.channelImage}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
