import React, { Component } from 'react'
import data from './data.json';
import SanPhamRedux from './SanPhamRedux';
export default class DSSanPhamRedux extends Component {
    // Viet phuong thuc render san pham
    renderSanPham = () =>{
        return data.map((sanPham, index) =>{
            return <div className ="col-4" key={index}>
                <SanPhamRedux sanPham={sanPham}/>
            </div>
        })
    }
    render() {
        return (
            <div className="container">
                <h3> Danh Sach San Pham</h3>
                <div className="row">
                    {this.renderSanPham()}            
                </div>
            </div>
        )
    }
}
