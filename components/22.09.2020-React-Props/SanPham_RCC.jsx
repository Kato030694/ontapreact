import React, { Component } from "react";

export default class SanPham_RCC extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //   bóc tách phần thừ
    const { phim } = this.props;
    // const { tenPhim } = this.props.phim;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={phim.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{phim.tenPhim}</h4>
          <p className="card-text">{phim.moTa}</p>
        </div>
      </div>
    );
  }
}
