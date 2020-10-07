import React, { Component } from "react";

// Import thu vien ket noi Redux (connect ham ket noi reactComponent va redux Store)
import { connect } from "react-redux";
class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    // this.props.gioHang la thuoc tinh nhan tu redux
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>{<img src={spGH.hinhAnh} width={75} height={75} />}</td>
          <td>{spGH.giaBan.toLocaleString()}</td>
          <td>{spGH.soLuong}</td>
          <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Ma SP</th>
              <th>Ten SP</th>
              <th>Hinh Anh</th>
              <th>Gia Ban</th>
              <th>So Luong</th>
              <th>Tong Tien</th>
            </tr></thead>
            <tbody>
                {this.renderGioHang()}
            </tbody>
          
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //state: la store tong, => truy xuat den gio hang GioHangReducer
  //=> bien state tren gioHangReducer
  return {
    gioHang: state.GioHangReducer.gioHang, //=> Tao ra 1 props cua component ModalGioHangRedux
  };
};
export default connect(mapStateToProps, null)(ModalGioHangRedux);
