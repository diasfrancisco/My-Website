import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./Repositories.css";

const Reposiitories = (props) => {
  const { repos } = props;

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <li className="single-repo">
          <FontAwesomeIcon
            icon={faCircle}
            className="green-status"
          ></FontAwesomeIcon>
          {item.name}
        </li>
      ))
    ) : (
      <li>Error loading repositories</li>
    );

  return (
    <div className="repo-list__container">
      <h2 className="repo-header">Repositories</h2>
      <ol className="li__container">{listRepos}</ol>
    </div>
  );
};

export default Reposiitories;
