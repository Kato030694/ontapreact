import React, { Component } from "react";
import { connect } from "react-redux";

class TableSinhVien extends Component {
  renderSinhVien = () => {
    const { mangSinhVien } = this.props;
    return mangSinhVien.map((sinhVien, index) => {
      return (
        <tr key={index}>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.hoTen}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
          <td><button className="btn btn-success" onClick={()=>this.props.deleteSinhVien(sinhVien.maSV)}>Xoa </button></td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props.mangSinhVien);

    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>Ma SV</th>
              <th>Ho Ten</th>
              <th>So Dien Thoai</th>
              <th>Email</th>
              <th>Hanh Dong</th>
            </tr>
          </thead>
          <tbody>{this.renderSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.dssv,
  };
};
const mapDisptachToProps = (dispatch) =>{
 return {
   deleteSinhVien: (maSV) =>{
     const action = {
       type: 'XOA_SINH_VIEN',
       maSV
     };
    //  console.log(action)
     dispatch(action);
   }
 }
}
export default connect(mapStateToProps, mapDisptachToProps)(TableSinhVien);
