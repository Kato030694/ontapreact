import React, { Component } from "react";
import Header from "./Header";
import Slider from "./Slider";
import Product from "./Product";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Modal from "./Modal";

export default class BaiTapCompenent extends Component {
  constructor(props){
    super(props);
    this.state = {
      sanPhamModal: {} // Tạo nguồn dữ liệu thay đổi
    }
  }

 mangSanPham = [
    { maSP: 1, tenSP: "BB", hinhAnh: "./img/vsphone.jpg", gia: 1000 },
    { maSP: 2, tenSP: "CC", hinhAnh: "./img/meizuphone.jpg", gia: 3000 },
    { maSP: 3, tenSP: "CK", hinhAnh: "./img/meizuphone.jpg", gia: 5000 },
    { maSP: 4, tenSP: "AA", hinhAnh: "./img/vsphone.jpg", gia: 3000 },
  ];
  // Dữ liệu cầ nhận ở đâu thì mình sẽ tạo callback function tại component đó
  xemChiTiet = (sanPhamChiTiet) =>{
    this.setState({
      sanPhamModal: sanPhamChiTiet
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList mangSanPham = {this.mangSanPham} xemChiTiet={this.xemChiTiet}/>
        <Footer />
        <Modal sanPhamModal = {this.state.sanPhamModal}/>
      </div>
    );
  }
}
