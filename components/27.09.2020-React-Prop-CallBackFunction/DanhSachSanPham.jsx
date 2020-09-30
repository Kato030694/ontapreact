import React, { Component } from "react";
import data from "./data.json";
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
        <div className="col-4" key={index}>
          <div className="card">
            <img className="card-img-top" src={dt.hinhAnh} alt="" />
            <div className="card-body">
              <h4 className="card-title">{dt.tenSP}</h4>
              <p className="card-text">{dt.manHinh}</p>
              <button className="btn btn-danger" onClick={()=>this.xemChiTiet(dt)}>Index</button>
            </div>
          </div>
        </div>
      );
    });
  };
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
