import React, { Component } from "react";
// Ket noi redux (connect ham ket noi reactComponetn va redux store)
import { connect } from "react-redux";
class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((sp, index) => {
      return (
        <tr key={index}>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>
            <img src={sp.hinhAnh} width={75} height={125} alt="Phone" />
          </td>
          <td>{sp.giaBan.toLocaleString()}</td>
          <td>
            <button
              className="btn-warning mr-3"
              onClick={() => this.props.tangGiamSL(index, false)}
            >
              -
            </button>
            {sp.soLuong}
            <button
              className="btn-warning ml-3"
              onClick={() => this.props.tangGiamSL(index, true)}
            >
              +
            </button>
          </td>
          <td>{(sp.giaBan * sp.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn-danger"
              onClick={() => this.props.xoaGioHang(index)}
            >
              Xoa
            </button>
            <button
              className="btn-warning ml-3"
              onClick={() => this.props.xoaGioHangMaSP(sp.maSP)}
            >
              Xoa MASP
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
              <td colSpan ="5"></td>
              <td> Tong Tien</td>
              <td>{this.props.gioHang.reduce((tongTien, spGioHang,index) =>{
                  return tongTien += spGioHang.soLuong * spGioHang.giaBan;
              },0).toLocaleString()}</td>
          </tfoot>
        </table>
      </div>
    );
  }
}
// Tao ra gia tri tu redux dung ham mapstatetoprops
const mapStateToProps = (state) => {
  //state la store tong, => truy xuat den gio hang GioHangReducer => bien state tren GioHangReducer
  return {
    gioHang: state.GioHangReducer.gioHang, //Tao ra 1 props cua components ModalGioHangRedux
  };
};
// Tao ra nut xu ly tu component nao thi tao dispatchtoProps
const mapDispatchToProp = (dispatch) => {
  return {
    xoaGioHang: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };
      // kiem tra xoa duoc chua
      // console.log(action);
      // Dua action le reduce
      dispatch(action);
    },
    xoaGioHangMaSP: (maSP) => {
      const action = {
        type: "XOA_GIO_HANG_MASP",
        maSP,
      };
      dispatch(action);
    },
    tangGiamSL: (index, tangGiam) => {
        const action = {
            type: 'TANG_GIAM',
            index,
            tangGiam,
        }
      dispatch(action);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(ModalGioHangRedux);
