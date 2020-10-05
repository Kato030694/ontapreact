import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
  render() {
    const {sp} = this.props;
    return (
      <div className="card text-white bg-dark">
        <img className="card-img-top" src={sp.hinhAnh} alt={sp.hinhAnh} width={250} height={300} />
        <div className="card-body">
          <h4 className="card-title">{sp.tenSP}</h4>
          <p className="card-text">{sp.gia}</p>
          <button className="btn btn-success">Thêm Giỏ Hàng</button>
        </div>
      </div>
    );
  }
}
