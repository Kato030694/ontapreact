import React, { Component } from "react";
// Ket noi voi reducer gio hang
import {connect} from "react-redux"
class SanPhamRedux extends Component {
  render() {
    const {sanPham} = this.props;
    return (
      <div className="card text-white bg-primary">
        <img className="card-img-top" src={sanPham.hinhAnh} width={300} height={300} alt={sanPham.hinhAnh} />
        <div className="card-body">
          <h4 className="card-title text-left">{sanPham.tenSP}</h4>
          <p className="card-text text-left">{sanPham.giaBan}</p>
          <button className="btn btn-danger" onClick={()=>{this.props.themGioHang(sanPham)}}> Them Gio Hang</button>
        </div>
      </div>
    );
  }
}

// Xay dung ham tao ra prop la ham xu ly su kien => dua du lieu len store
// Noi nao co chua nut xu ly se viet phuong thuc
const mapDispatchToProps = (dispatch) =>{
    return {
        // Tao ra props components (la function) => dua du lieu len store
        themGioHang: (sanPham) =>{
            const spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                giaBan: sanPham.giaBan,
                soLuong: sanPham.soLuong,
                hinhAnh: sanPham.hinhAnh,
            }
        // Tao action dua du lieu len reducer 
        const action ={
            type: 'THEM_GIO_HANG', //Bat buoc dat type
            spGioHang:spGioHang //Noi dung gui len reducer
        }
        console.log(action)
        // Dung ham dispatch dua du lieu action len reducer
        dispatch(action);
        }
    }
}
// tham so thu 1 lay gia tri tu redux ve, tham so thu 2 dinh nghia ra ham de dua gia tri len redux.
// Truyen components SanPhamRedux vao de su dung nhu 1 the binh thuong.
export default connect(null, mapDispatchToProps)(SanPhamRedux)
