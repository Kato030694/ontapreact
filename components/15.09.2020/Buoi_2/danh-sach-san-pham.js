import React, { Component } from "react";
import SanPham from "./san-pham";
export default class DanhSachSanPham extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <SanPham />
          <SanPham />
          <SanPham />
        </div>
      </div>
    );
  }
}
