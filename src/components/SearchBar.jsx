import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  };

  updateField = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <form onSubmit={this.handleSearch}>
              <div className="field has-addons">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-large"
                    type="text"
                    value={this.state.query}
                    onChange={e => this.updateField(e.target.value)}
                  />
                  <span className="icon is-large is-left">
                    <i className="fa fa-search" />
                  </span>
                </div>
                <div className="control">
                  <button className="button is-large is-info">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBar;
