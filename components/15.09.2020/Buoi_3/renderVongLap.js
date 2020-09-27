import React, { Component } from "react";
import data from "./data.json";
export default class BaiTapVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listFilm: data,
    };
  }
  DanhSachPhim = () => {
    return this.state.listFilm.map((film) => {
      return (
        <div className="col-sm-4 content-film" key={film.maPhim}>
          <div className="img_film">
            <img src={film.hinhAnh} alt="" className="size-img" />
          </div>
          <div className="infor-film">
            <h4 className="name-film">{film.tenPhim}</h4>
            <p className="content-film">{film.moTa}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="title">Nội Dung Film</h3>
        <div className="container-film">
          <div className="row">{this.DanhSachPhim()}</div>
        </div>
      </div>
    );
  }
}
