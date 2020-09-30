import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  renderSanPham = () => {
    // lay gia tri mang san phẩm từ component cha truyen vao thong qua thuoc tinh this.props
    let { mangSanPham } = this.props;
    return mangSanPham.map((sp, index) => {
      return (
        // Div này là 1 đối tượng của React
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

