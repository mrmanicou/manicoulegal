import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

class App extends Component {
  state = {
    searchResults: [],
    currentQuery: "",
    isLoading: false,
  };

  handleSearch = (currentQuery) => {
    this.setState({ currentQuery, isLoading: true });
    axios
      .get(`https://us-central1-manicoulegalgd.cloudfunctions.net/search?query=${currentQuery}`)
      .then((res) => {
        this.setState({ searchResults: res.data });
      })
      .catch(console.log)
      .finally(() => this.setState({ isLoading: false }));
    console.log("searching for: ", this.state.currentQuery);
  };

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <SearchBar onSearch={this.handleSearch} query={this.state.query} />
        <SearchResults
          results={this.state.searchResults}
          query={this.state.currentQuery}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
