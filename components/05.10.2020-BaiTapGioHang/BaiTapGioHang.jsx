import React, { Component } from "react";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";
import ModalGioHang from "./ModalGioHang";
import data from "./data.json";
export default class BaiTapGioHang extends Component {
  constructor(props){
    super(props);
    this.state = {
      gioHang: [{"maSP": 1,
    "tenSP": "VinSmart Live",
    "giaBan": 5700000,
    "hinhAnh": "./img/vsphone.jpg", 
    "soLuong": 5}]
    }
  }
  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, sanPham, index)=>{
      return tsl += sanPham.soLuong;
    },0)
    // Muốn tính tổng số lượng phải duyệt qua mảng giỏ hàng, số 0 là số đầu tiên của mảng duyệt
    //Số đầu là 0, thì nó sẽ lấy 0 + cho số lượng đầu tiên, lần đầu là 5, sẽ trả là 5
    // Lần thứ 2 thì sẽ lấy số lượng là 5 + với số lượng sản phẩm thứ 2.
    // Cho đến khi duyệt hết mảng và trả về tongSoLuong
    return (
      <div class="container">
        <h3 className="text-center text-success">Bài Tập Giỏ Hàng</h3>
        <ModalGioHang gioHang={this.state.gioHang}/>
        <div className="text-right">
          <span
            className="text-danger"
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
            data-toggle="modal" data-target="#modelId"
          >
            Giỏ Hàng ({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPhamGioHang mangSanPham={data} />
      </div>
    );
  }
}
