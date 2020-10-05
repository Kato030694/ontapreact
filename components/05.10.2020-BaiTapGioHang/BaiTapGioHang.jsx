import React, { Component } from "react";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";
import ModalGioHang from "./ModalGioHang";
import data from "./data.json";
export default class BaiTapGioHang extends Component {
  render() {
    return (
      <div class="container">
        <h3 className="text-center text-success">Bài Tập Giỏ Hàng</h3>
        <ModalGioHang />
        <div className="text-right">
          <span
            className="text-danger"
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
            data-toggle="modal" data-target="#modelId"
          >
            Giỏ Hàng (0)
          </span>
        </div>
        <DanhSachSanPhamGioHang mangSanPham={data} />
      </div>
    );
  }
}
