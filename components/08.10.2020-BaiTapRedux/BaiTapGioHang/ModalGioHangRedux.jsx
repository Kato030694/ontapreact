import React, { Component } from "react";

// Import thu vien ket noi Redux (connect ham ket noi reactComponent - reduxStore)
import { connect } from "react-redux";
class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    // this.props.gioHang la thuoc tinh nhan tu redux
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            {
              <img
                src={spGH.hinhAnh}
                width={75}
                height={75}
                alt={spGH.hinhAnh}
              />
            }
          </td>
          <td>{spGH.giaBan}</td>
          <td>
            <button
              className="btn-success"
              onClick={() => this.props.tangGiamSoLuong(index, false)}
            >
              -
            </button>
            {spGH.soLuong}{" "}
            <button
              className="btn-success"
              onClick={() => this.props.tangGiamSoLuong(index, true)}
            >
              +
            </button>
          </td>
          <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHangIndex(index);
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.xoaGioHangMaSP(spGH.maSP);
              }}
            >
              Xoa Ma SP
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    // this.props.gioHang la thuoc tinh nhan tu redux
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
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <td colSpan="5"></td>
            <td>Tong Tien</td>
            <td>
              {this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                return (tongTien += spGioHang.soLuong * spGioHang.giaBan);
              }, 0)}
            </td>
          </tfoot>
        </table>
      </div>
    );
  }
}
// tao ra gia tri
const mapStateToProps = (state) => {
  //state: la store tong, => truy xuat den gio hang GioHangReducer
  //=> bien state(la store tong) tren gioHangReducer
  // Tra ve 1 object thanh props cua components nay
  return {
    gioHang: state.GioHangReducer.gioHang, //=> Tao ra 1 props cua component ModalGioHangRedux
  };
};
// Tao ra 1 nut xu ly nao do
const mapDishpatchToProps = (dispatch) => {
  return {
    xoaGioHangIndex: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };
      // Dua action len reducer
      dispatch(action);
    },
    xoaGioHangMaSP: (maSP) => {
      const action = {
        type: "XOA_GIO_HANG_MSP",
        maSP,
      };
      dispatch(action);
    },
    // chua nut xu ly
    tangGiamSoLuong: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        index,
        tangGiam,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDishpatchToProps)(ModalGioHangRedux);
