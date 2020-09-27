import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src="./img/vsphone.jpg" alt="" />
          <div className="card-body">
            <h4 className="card-title">VS Phone</h4>
            <button className="btn btn-success">Chi Tiết</button>
          </div>
        </div>
      </div>
    );
  }
}
