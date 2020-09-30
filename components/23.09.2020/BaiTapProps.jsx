import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
export default class BaiTapProps extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       Phone: data,
  //     };
  //   }

  mangSanPham = [
    { maSP: 1, tenSP: "BB", hinhAnh: "./img/imgBlackCar.jpg", gia: 1000 },
    { maSP: 2, tenSP: "CC", hinhAnh: "./img/slide_2.jpg", gia: 3000 },
    { maSP: 3, tenSP: "CK", hinhAnh: "./img/slide_3.jpg", gia: 5000 },
    { maSP: 4, tenSP: "AA", hinhAnh: "./img/lt_hp.png", gia: 3000 },
  ];
  render() {
    return (
      <div>
        <ProductList mangSanPham={this.mangSanPham} />
      </div>
    );
  }
}

