import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./FBMPSearchBar.css";

const FBMPSearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

  return (
    <div id="fb_searchbar">
        <input type="text" placeholder="Search here" onChange={handleChange} value={searchInput} />
        <FontAwesomeIcon id="search_icon" icon={faSearch} />
    </div>
  );
};

export default FBMPSearchBar;