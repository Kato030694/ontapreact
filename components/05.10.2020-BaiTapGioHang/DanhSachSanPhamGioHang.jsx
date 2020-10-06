import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";

export default class DanhSachSanPhamGioHang extends Component {
  render() {
    const { mangSanPham,themGioHang } = this.props;
    return (
      <div className="container">
        <div className="row">
          {mangSanPham.map((sp, index) => {
            return (
              <div className="col-sm-3" key={index} >
                <SanPhamGioHang sp={sp} themGioHang={themGioHang}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
