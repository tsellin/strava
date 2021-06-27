import React, { Component } from "react";

class Test extends Component {
  render() {
    return (
      <div className="container-fluid vh-100">
        <div className="row vh-100">
          <div className="col-md-3 bg-light m-2">Column</div>
          <div className="col-md-8 bg-light m-2">Column</div>
        </div>
      </div>
    );
  }
}

export default Test;
