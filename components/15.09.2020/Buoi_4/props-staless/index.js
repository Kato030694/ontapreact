import React, { Component } from "react";
import Footer from "./footer";
export default class HomeLayout extends Component {
  name = "Huỳnh Long Ẩn";
  render() {
    return (
      <div>
        <Footer name={"Ẩn"}></Footer>
      </div>
    );
  }
}
