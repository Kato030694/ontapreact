// Nhấn nút và thay đổi màu xe
import React, { Component } from "react";

export default class Changecolor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/imgBlackCar.jpg",
    };
  }
  handleChangeCar = (color) => {
    let img = "";
    switch (color) {
      case "one":
        img = "./img/imgBlackCar.jpg";
        break;
      case "two":
        img = "./img/imgRedCar.jpg";
        break;
      default:
        img = "./../img/imgSilverCar.jpg";
        break;
    }
    this.setState({
      img,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="title">Choose Car</h1>
        <div className="row">
          <div className="col-sm-6">
            <img src={this.state.img} className="img-fluid" alt=""></img>
          </div>
          <div className="col-sm-6">
            <button
              className="btn btn-danger m-3 p-2"
              onClick={() => {
                this.handleChangeCar("one");
              }}
            >
              One
            </button>
            <button
              className="btn btn-success m-3 p-2"
              onClick={() => {
                this.handleChangeCar("two");
              }}
            >
              Two
            </button>
            <button
              className="btn btn-light m-3 p-2"
              onClick={() => {
                this.handleChangeCar("there");
              }}
            >
              There
            </button>
          </div>
        </div>
      </div>
    );
  }
}
