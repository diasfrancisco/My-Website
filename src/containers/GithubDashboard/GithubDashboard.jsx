import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Repositories } from "../../components";
import "./GithubDashboard.css";

const GithubDashboard = () => {
  const [repos, SetRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      try {
        const result = await axios(
          "https://api.github.com/users/diasfrancisco/repos"
        );
        SetRepos(result);
      } catch (err) {
        console.log(err);
      }
    }
    getRepos();
  }, []);

  return (
    <div className="github__container">
      <Repositories repos={repos} />
    </div>
  );
};

export default GithubDashboard;
