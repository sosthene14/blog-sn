import React from "react";
import DataInformation from "./screens/home_page/ArticlesSections";


class Blogposts extends React.Component {
  state = {
    posts: [],
    sortBy: "dateAdded",
    query :""
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const { sortBy } = this.state;

    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({query: this.props.query}),
    });

    const ApiResponse = await response.json();

    const sortedPosts = ApiResponse.data.user.publication.posts.sort(
      (a, b) => b[sortBy] - a[sortBy]
    );

    this.setState({ posts: sortedPosts });
  };

  handleSortChange = (event) => {
    const sortBy = event.target.value;
    this.setState({ sortBy }, this.fetchPosts);
  };

  render() {
    const { posts, sortBy } = this.state;

    return (
      <div>
        <div>
          <label className="btn-sorting-div">
            Sort by:
            <select value={sortBy} onChange={this.handleSortChange} className="sort-button">
              <option value="dateAdded">Date Added</option>
              <option value="totalReactions">Total Reactions</option>
              <option value="replyCount">Reply Count</option>
            </select>
          </label>
        </div>

        {posts.map((post, index) => (
          <div key={index}>
            <DataInformation post={post} />
          </div>
        ))}
      </div>
    );
  }
}

export default Blogposts;
