import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./FBMPSearchBar.css";

const FBMPSearchBar = ({location}) => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
      setSearchInput(e.target.value);
    };

  return (
    <div className={location}>
      <input type="text" placeholder="Search here" onChange={handleChange} value={searchInput} />
      <FontAwesomeIcon className={location+'_search_icon'} icon={faSearch} />
    </div>
  );
};

export default FBMPSearchBar;