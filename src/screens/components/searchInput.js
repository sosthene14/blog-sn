import React, { useState, useEffect } from "react";


class SearchInput extends React.Component {
  state = {
    posts: [],
    searchTerm: "",
    query:""
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({query: this.props.query}),
    });
    const ApiResponse = await response.json();
    this.setState({ posts: ApiResponse.data.user.publication.posts });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div>
        <div className="div-right-icons">
          <div className="search-input-div">
            <input
              type="text"
              placeholder="Recherche"
              className="input-search"
              id="search-input"
              value={searchTerm}
              onChange={(event) => {
                this.setState({ searchTerm: event.target.value });
              }}
            />
            </div>
            <div className="template_Container">
              {this.state.posts
                .filter((val) => {
                  if (searchTerm === "") {
                   
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val, index) => {
                  return (
                    <a href={`https://blog.rutikwankhade.dev/${val.slug}`} key={index} target="_blank">
                      <div className="template">
                        <h3>{val.title}</h3>
                      </div>
                    </a>
                  );
                })}
            </div>
          </div>
        
      </div>
    );
  }
}

export default SearchInput;
