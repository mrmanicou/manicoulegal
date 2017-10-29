import React, { Component } from "react";

export default class SearchResults extends Component {
  renderList = () => {
    const { results } = this.props;

    if (results.length === 0) {
      return (
        <div className="box">
          <div className="content">
            <h1>Manicou Legal</h1>
            <p>
              This is a proof of concept application demonstrating the feasibility of using a
              serverless architecture for a real life project. The information provided is not
              authoritative, and your usage of this site implies that you agree that we cannot be
              held liable for inaccurate information. All rights belong to the copyright holders. In
              the case of the Laws of Grenada, they belong to the Government of Grenada. If you need
              accurate and up-to-date references to the Laws of Grenada, please go to &nbsp;
              <a href="http://laws.gov.gs">the official Laws of Grenada website</a>
            </p>
            <h2>Tech Stack</h2>
            <p>
              <dl>
                <dt>
                  <a href="https://reactjs.org/">ReactJs</a>
                </dt>
                <dd>Bootstrapped using create-react-app.</dd>
                <dt>
                  <a href="http://elasticlunr.com/">elasticlunr.js</a>
                </dt>
                <dd>Full text search javascript library</dd>
                <dt>
                  <a href="https://firebase.google.com/">Firebase</a>
                </dt>
                <dd>
                  The application makes use of various firebase services:
                  <ul>
                    <li>
                      <a href="https://firebase.google.com/products/hosting">Hosting</a>
                    </li>
                    <li>
                      <a href="https://firebase.google.com/products/functions/">Cloud Functions</a>
                    </li>
                  </ul>
                </dd>
                <dt>
                  <a href="https://aws.amazon.com/s3/?nc2=h_m1">S3 from Amazon Web services</a>
                </dt>
                <dd>Used to store and serve the pdfs that were indexed for searching</dd>
              </dl>
            </p>
            <h2>Source Code</h2>
            <p>
              <a href="http">Github repo</a>
            </p>
            <h2>Usage</h2>
            <p>
              Simply enter a query in the search box above, press enter and the site will instantly
              return a list of documents that are relevant to your search of our laws.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="columns is-multiline is-mobile">
        {results.map(x => (
          <div className="column is-one-quarter" key={x.id}>
            <a
              href={`https://s3.us-east-2.amazonaws.com/manicouio/lg/laws/${x.filename}`}
              target="_blank"
            >
              <div className="box" style={{ height: "100px" }}>
                {x.title}
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <section className="section">
        <div className="container">{this.renderList()}</div>
      </section>
    );
  }
}
