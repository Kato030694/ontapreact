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
          <td>{<img src={spGH.hinhAnh} width={75} height={75} alt={spGH.hinhAnh}/>}</td>
          <td>{spGH.giaBan}</td>
          <td>{spGH.soLuong}</td>
          <td>{spGH.giaBan * spGH.soLuong}</td>
          <td><button className="btn btn-danger" onClick={()=>{this.props.xoaGioHangIndex(index)}}>Delete</button></td>
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
// tao ra gia tri
const mapStateToProps = (state) => {
  //state: la store tong, => truy xuat den gio hang GioHangReducer
  //=> bien state tren gioHangReducer
  // Tra ve 1 object thanh props cua components nay
  return {
    gioHang: state.GioHangReducer.gioHang, //=> Tao ra 1 props cua component ModalGioHangRedux
  };
};
// Tao ra 1 nut xu ly nao do
const mapDishpatchToProps = (dispatch) =>{
  return {
    xoaGioHangIndex: (index) =>{
      const action = {
        type: 'XOA_GIO_HANG',
        index
      }
      // Dua action len reducer
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDishpatchToProps)(ModalGioHangRedux);
