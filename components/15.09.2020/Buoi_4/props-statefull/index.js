import React, { Component } from "react";
import Header from "./header";
export default class HomeL extends Component {
  name = "Huỳnh Long Ẩn";
  job = "DEV FE";
  render() {
    return (
      <div>
        <Header name={this.name}></Header>
        <Header job={this.job}></Header>
      </div>
    );
  }
}
