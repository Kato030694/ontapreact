import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let {sp, xemChiTiet} = this.props;
    return (
      <div className="col-3">
        <div className="card">
          <img className="card-img-top" src={sp.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{sp.tenSP}</h4>
            <p className="card-text">{sp.gia}</p>
            <a
              href="#"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#modelId"
              onClick={()=>xemChiTiet(sp)}
            >
              Detail
            </a>
            <a href="#" className="btn btn-danger">
              Cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}
