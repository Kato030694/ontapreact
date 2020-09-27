import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  renderSanPham = () => {
    let { mangSanPham } = this.props;
    return mangSanPham.map((sp, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <Product sanPham={sp} />
        </div>
      );
      //   div là 1 đối tượng jsx react, mỗi đối tượng sinh ra đều cần có key
    });
  };
  render() {
    //   Lấy tên props

    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
