import React, { Component } from "react";
// Ket noi voi reducer gioHangreducer
import {connect} from 'react-redux';
class SanPhamRedux extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div className="container">
        <div className="card text-white bg-primary">
          <img className="card-img-top" src={sanPham.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>
            <button className="btn btn-success" onClick={() =>{
                this.props.themGioHang(sanPham)
            }}>Them Gio Hang</button>
          </div>
        </div>
      </div>
    );
  }
}

// xay dung ham tao ra props la ham xu ly su kien => dua du lieu len store
// Noi nao co nut xu ly, thi viet phuong thuc nay 
const mapDispatchtoProps = (dispatch) =>{
    return {
        // tao ra prop components la function => dua du lieu len store
        themGioHang: (sanPham) => {
            const spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                giaBan: sanPham.giaBan,
                soLuong: sanPham.soLuong,
                hinhAnh: sanPham.hinhAnh,
            }
            // Tao action dua du lieu len reducer
        const action = {
            type: 'THEM_GIO_HANG', //bat buoc
            spGioHang: spGioHang //Noi dung gui len reducer
        }
        // console.log(action)
        //Dung ham dispatch dua du lieu action reducer
        dispatch(action)
        }
    }
}
export default connect(null, mapDispatchtoProps)(SanPhamRedux);