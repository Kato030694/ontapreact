import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  renderSanPham = ()=>{
 let {mangSanPham, xemChiTiet} = this.props;
  return mangSanPham.map((sp, index) => {
    return(
      <Product sp={sp} key = {index} xemChiTiet= {xemChiTiet}/>
    )
  })
}
  render() {
    return (
     <div className="row">{this.renderSanPham()}</div>
    );
  }
}
