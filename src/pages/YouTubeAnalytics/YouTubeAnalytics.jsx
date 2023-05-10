import { React } from "react";
import { FBMPSearchBar } from "../../components";
import YouTube from "../../assets/images/youtube.png"
import "./YouTubeAnalytics.css";

const YouTubeAnalytics = () => {
  return (
    <div className="yt_page_container">
      <div className="yt_dashboard_container">
        <div className="sidebar">
          <img src={YouTube} alt="youtube logo" className="yt_logo" />
          <div className="analytics">
            <button>Sentiment Analysis</button>
            <button>Thumbnail Analysis</button>
            <button>Duration Analysis</button>
          </div>
        </div>
        <div className="main_container">
          <div className="header">
            <FBMPSearchBar location={'yt_searchbar'}/>
            <div className="functions">
              <div className="func_btn" style={{backgroundColor: 'rgb(255,96,88)'}}></div>
              <div className="func_btn" style={{backgroundColor: 'rgb(255,191,43)'}}></div>
              <div className="func_btn" style={{backgroundColor: 'rgb(36,207,64)'}}></div>
            </div>
          </div>
          <div className="analytics_container"></div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeAnalytics;