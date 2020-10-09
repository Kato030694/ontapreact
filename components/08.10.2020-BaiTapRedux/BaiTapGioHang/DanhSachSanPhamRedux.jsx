import React, { Component } from "react";
import data from "./../../05.10.2020-BaiTapGioHang/data.json";
import SanPhamRedux from "./SanPhamRedux";
export default class DanhSachSanPhamRedux extends Component {
  // Viet phuong thuc render San Pham
  renderSanPham = () => {
    return data.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamRedux sanPham={sanPham} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="contianer">
        <h3 className="text-danger text-center"> Danh Sach San Pham</h3>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
