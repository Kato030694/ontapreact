import React, { Component } from "react";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";
import ModalGioHang from "./ModalGioHang";
import data from "./data.json";
export default class BaiTapGioHang extends Component {
  constructor(props){
    super(props);
    this.state = {
      gioHang: []
    }
  }

  // Lấy dữ liệu tại components BaiTapGioHang
  themGioHang = (sanPhamChon) =>{ 
    //B1: từ sp được chọn tạo ra sp giỏ hàng
    let spGioHang = {maSP: sanPhamChon.maSP,
    tenSP: sanPhamChon.tenSP,
    giaBan: sanPhamChon.giaBan,
    hinhAnh: sanPhamChon.hinhAnh, 
    soLuong: 1}
    // Kiem tra sanPhamChon co trong gio hang chua
    // vi du Spread Operator, them phan tu vao mang 
    /**let a ={name: "An", lop: FE42} 
     * let b = {...a, Tuoi: 26}
    */
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
    if(index!==-1)
    {
      // San pham duoc click da co trong this.state.gioHang
      gioHangCapNhat[index].soLuong +=1;
    }else{
      // San pham duoc click chua co trong this.state.gioHang
      gioHangCapNhat.push(spGioHang);
    }
    // setState de components render lai
    this.setState({
      gioHang: gioHangCapNhat
    })
  }

  // dat su kien xoa gio hang tai BaiTapGioHang
  xoaGioHang = (maSP) =>{
    // Tim trong gio hang co sp chua maSP duoc click xoa
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
    if(index!==-1)
    {
      gioHangCapNhat.splice(index, 1);
    }
    // Cach 2: Dung ham filter
    // var gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== maSP);
    // Cap nhat lai state trong gio hang va render giao dien
    this.setState({
      gioHang: gioHangCapNhat,
    })
  }

  // Tang giam so luong
  tangGiamSoLuong = (maSP, tangGiam) =>
  // tangGiam == true: tang so luong, false giam so luong
  {
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
    // Xu ly tang giam
    if(tangGiam)
    {
      gioHangCapNhat[index].soLuong +=1;
    }
    else
    {
      if(gioHangCapNhat[index].soLuong >1)
      {
        gioHangCapNhat[index].soLuong -=1;
      }
    }
    this.setState({
      gioHang: gioHangCapNhat
    })
  }
  render() {
    let soLuong = [...this.state.gioHang];
    let tongSoLuong = soLuong.reduce((tsl, sanPham, index)=>{
      return tsl += sanPham.soLuong;
    },0)
    // Muốn tính tổng số lượng phải duyệt qua mảng giỏ hàng, số 0 là số đầu tiên của mảng duyệt
    //Số đầu là 0, thì nó sẽ lấy 0 + cho số lượng đầu tiên, lần đầu là 5, sẽ trả là 5
    // Lần thứ 2 thì sẽ lấy số lượng là 5 + với số lượng sản phẩm thứ 2.
    // Cho đến khi duyệt hết mảng và trả về tongSoLuong
    return (
      <div className="container">
        <h3 className="text-center text-success">Bài Tập Giỏ Hàng</h3>
        <ModalGioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}/>
        <div className="text-right" >
          <span
            className="text-danger"
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
            data-toggle="modal" data-target="#modelId"
          >
            Giỏ Hàng ({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPhamGioHang mangSanPham={data} themGioHang={this.themGioHang}/>
      </div>
    );
  }
}

