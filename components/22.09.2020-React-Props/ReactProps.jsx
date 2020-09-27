import data from "./data.json";
import React, { Component } from "react";
import SanPham_RCC from "./SanPham_RCC";

export default class ReactProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: data,
    };
  }
  renderPhim = () => {
    return this.state.mangPhim.map((phim) => {
      return (
        <div className="col-sm-4" key={phim.maPhim}>
          <SanPham_RCC phim={phim} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }
}
