import React, { Component } from "react";

export default class SinhVien extends Component {
  // thuộc tính hoTen, lop thuoc class Sinh Vien
  hoTen = "NGuyen Van A";
  Lop = "FE42";
  // tenTrungTam = "Cyber";
  renderThongTinSinhVien = (tenTrungTam) => {
    return (
      <ul>
        <li>Họ Tên: {this.hoTen}</li>
        <li>Lớp: {this.Lop}</li>
        <li>Trung Tâm: {tenTrungTam}</li>
      </ul>
    );
  };
  //   Phương thức render là phương thức thuộc class Sinh Vien
  render() {
    //   Biến của hàm render
    const tenTrungTam = "ABC";
    return (
      <div className="cointainer">
        {this.renderThongTinSinhVien(tenTrungTam)}
      </div>
    );
  }
}
