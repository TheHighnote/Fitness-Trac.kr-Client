import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const searchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const searchPost = (e) => {
    e.preventDefault();
    const searchToLower = searchTerm.toLowerCase();
    const filteredSearch = props.posts.filter((post) => {
      const postToLower = post.title.toLowerCase();
      return postToLower.includes(searchToLower);
    });
    props.setPosts(filteredSearch);
    navigate("/");
  };
  return (
    <div id="serachBarAndMagGlassWrapper">
      <form onSubmit={searchPost}>
        <input
          id="searchBar"
          type="text"
          placeholder="Search Here"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default searchBar;
