import data from "./data.json";
import React, { Component } from "react";
// import data from "./data.json";
export default class DemoVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      danhSachFilm: data,
    };
  }
  DanhSachPhim = () => {
    //   Dùng hàm map để lấy data từ file data.json
    return this.state.danhSachFilm.map((film) => {
      return (
        <div className="col-sm-4" key={film.maPhim}>
          <div className="img_film">
            <img src={film.hinhAnh} alt="" class="img-film"></img>
          </div>
          <div className="content_total">
            <h4 className="name-film">{film.tenPhim}</h4>
            <p className="content-film">{film.moTa}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="cointainer">
        <h3>Nội Dung Phim</h3>
        <div className="row">{this.DanhSachPhim()}</div>
      </div>
    );
  }
}
