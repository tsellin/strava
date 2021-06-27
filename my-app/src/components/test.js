import React, { Component } from "react";
import Cards from "./cards";

class Test extends Component {
  render() {
    return (
      <div className="container-fluid vh-100">
        <div className="row vh-100">
          <div className="col-md-3 bg-light m-4">
            <h3>Recent Runs</h3>
            <Cards activities={this.props.activities} />
          </div>
          <div className="col-md-8 bg-light m-4">Column</div>
        </div>
      </div>
    );
  }
}

export default Test;
