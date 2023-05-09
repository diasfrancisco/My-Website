import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ResponsiveBar } from '@nivo/bar';
import './RepositoryMetrics.css';

const RepositoryMetrics = (props) => {
  const { singleRepo } = props
  const [repoStats, setrepoStats] = useState([])
  const dictStats = [];

  console.log(singleRepo)

  function displayPageLink() {
    switch (singleRepo.name) {
      case "Facebook-Marketplaces-Ranking-System":
        return <Link to="fbmp"><FontAwesomeIcon className='proj_icon' icon={faDiagramProject} /></Link>;
      case "YouTube-Data-Streaming":
        return <Link to="yt_analytics"><FontAwesomeIcon className='proj_icon' icon={faDiagramProject} /></Link>;
    }
  }

  function displayFBMP() {
    if (singleRepo.name === "Facebook-Marketplaces-Ranking-System") {
      return <Link to="fbmp"><FontAwesomeIcon className='proj_icon' icon={faDiagramProject} /></Link>;
    }
  }

  function commitsWeekly() {
    for (let i = 0; i < repoStats.length; i++) {
      const obj = {index: i, value: repoStats[i]};
      dictStats.push(obj);
    }
  }
  
  useEffect(() => {
    async function getStats() {
      try {
        const result = await axios(
          "https://api.github.com/repos/diasfrancisco/" + singleRepo.name + "/stats/participation"
        );
        setrepoStats(result.data["all"]);
      } catch (err) {
        console.log(err);
      }
    }
    getStats();
  }, []);

  commitsWeekly()

  return (
    <>
    <div>
      <a href={singleRepo.html_url} target="_blank" rel="noreferrer"><FontAwesomeIcon className='proj_icon' icon={faGithub} /></a>
      {displayPageLink()}
    </div>
    <div className='bar_container'>
      <div id='weekly'>Weekly Commits</div>
      <ResponsiveBar
      data={dictStats}
      keys={["value"]}
      indexBy="index"
      margin={{ top: 20, right: 30, bottom: 70, left: 50 }}
      padding={0.3}
      colors={{scheme: 'blues'}}
      labelTextColor="black"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'weeks',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'commits',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      theme={{
        axis: {
          ticks: {
            line: {
              stroke: "white"
            },
            text: {
              fill: "white"
            }
          },
          legend: {
            text: {
              stroke: "white"
            }
          }
        }
      }}
      role="application"
      ariaLabel="Weekly Commits"
      />
    </div>
    </>
  );
};

export default RepositoryMetrics