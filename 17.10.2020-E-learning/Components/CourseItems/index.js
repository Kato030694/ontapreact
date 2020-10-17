import React, { Component } from "react";

export default class CourseItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card p-2 mb-4">
        <img src={item.hinhAnh} alt={item.hinhAnh} style={{width: "100%", height: 300}}/>
        <p className="lead font-weight-bold">Name: {item.tenKhoaHoc}</p>
        <p className="lead">Author: {item.biDanh}</p>
        <p className="lead">View:{item.luotXem}</p>
        <button className="btn btn-success">Go To Detail</button>
      </div>
    );
  }
}
