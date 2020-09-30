import React, { Component } from "react";
import data from "./data.json";
import SanPham from "./SanPham";
export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      danhSachDienThoai: data[0],
    };
  }
  renderSanPham = () => {
    return data.map((dt, index) => {
      return (
        <SanPham key={index} dt={dt} xemChiTiet={this.xemChiTiet}/>
      )
    });
  };
  // Dữ liệu cần lấy ở component DanhSachSanPham => đặt callback function tại DanhSachSanPham
  // Xu ly nut xem chi tiet
  xemChiTiet = (sanPham) =>{
    // Thay doi gia tri phone xemChiTiet
    this.setState({
      danhSachDienThoai: sanPham
    })
  }
  render() {
    let { danhSachDienThoai } = this.state;
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
        <div className="row">
          <div className="col-6 text-center">
            <h3>{danhSachDienThoai.tenSP}</h3>
            <img src={danhSachDienThoai.hinhAnh} width={400} height={500} />
          </div>

          <div className="col-6">
            <h3>Thong So Ky Thuat</h3>
            <div className="table">
              <tr>
                <th>Man Hinh</th>
                <td>{danhSachDienThoai.manHinh}</td>
              </tr>
              <tr>
                <th>He Dieu Hanh</th>
                <td>{danhSachDienThoai.heDieuHanh}</td>
              </tr>
              <tr>
                <th>Camera Truoc</th>
                <td>{danhSachDienThoai.cameraTruoc}</td>
              </tr>
              <tr>
                <th>Camera Sau</th>
                <td>{danhSachDienThoai.cameraSau}</td>
              </tr>
              <tr>
                <th>RAM</th>
                <td>{danhSachDienThoai.ram}</td>
              </tr>
              <tr>
                <th>ROM</th>
                <td>{danhSachDienThoai.rom}</td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
