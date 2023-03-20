import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCode } from "@fortawesome/free-solid-svg-icons";
import { RepositoryMetrics } from '../../components'
import "./Repositories.css";

const Reposiitories = (props) => {
  const { repos } = props;
  const [isShown, setisShown] = useState(false);
  const [repoName, setrepoName] = useState([]);
  const [singleRepo, setsingleRepo] = useState([]);

  const showMetrics = event => {
    setisShown(current => !current);
    setsingleRepo(event);
    setsingleRepo(event);
    setrepoName(event.name);
  };

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <button className="single-repo" onClick={event => {showMetrics(item);}}>
          <FontAwesomeIcon
            icon={faCircle}
            className="green-status"
          ></FontAwesomeIcon>
          {item.name}
        </button>
      ))
    ) : (
      <li>Error loading repositories</li>
    );

  return (
    <>
    <div className="repo-list__container">
      <h2 className="repo-header">Repositories</h2>
      <ol className="li__container">{listRepos}</ol>
    </div>
    {isShown && <div className="metrics_container">
      <div className="inner_metrics_container">
        {isShown && <h2 className="metrics_header">{repoName}</h2>}
        {isShown && <RepositoryMetrics singleRepo={singleRepo}/>}
      </div>
    </div>}
    {!isShown && <div className="metrics_container">
      <div className="not_inner_metrics_container">
        <FontAwesomeIcon icon={faCode} className="code_icon"></FontAwesomeIcon>
        <h1>Please choose a repository</h1>
      </div>
    </div>}
    </>
  );
};

export default Reposiitories;
