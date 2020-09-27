import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div>
        <div className="container">
          <div className="container">
            <div className="card bg-light">
              <img clasName="card img-top" src="" alt="Card img" />
              <div className="card-body text-center">
                <h4 className="card-title text-center">{sanPham.tenSP}</h4>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary">
                  Detail
                </a>
                <a href="#" className="btn btn-danger">
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

