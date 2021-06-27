import "./App.css";
import axios from "axios";
import Cards from "./components/cards";
import Test from "./components/test";

import React, { Component } from "react";

class App extends Component {
  state = {
    access_token: "",
    activities: [],
  };

  async get_access_token() {
    let res = await axios.post(
      "https://www.strava.com/api/v3/oauth/token?client_id=66663&client_secret=e1d05c6864fdd0aa70563b14ae4aa717e19ee87a&grant_type=refresh_token&refresh_token=7636c9d810a4cdce6f028a55932a2e936e8bfa37"
    );
    this.setState({
      access_token: res.data.access_token,
    });
  }

  async get_activities() {
    let res = await axios.get(
      "https://www.strava.com/api/v3/athlete/activities",
      {
        headers: { Authorization: `Bearer ${this.state.access_token}` },
      }
    );
    this.setState({ activities: res.data });
  }

  async componentDidMount() {
    await this.get_access_token();
    await this.get_activities();
  }

  render() {
    return (
      <div>
        <Test activities={this.state.activities} />
      </div>
    );
  }
}

export default App;
