// Bài tập state
import React, { Component } from "react";

export default class Colorcar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/imgBlackCar.jpg",
    };
  }
  changeColor = (color) => {
    let img = "";
    switch (color) {
      case "one":
        img = "./img/imgBlackCar.jpg";
        break;
      case "two":
        img = "./img/imgRedCar.jpg";
        break;
      default:
        img = "./img/imgSilverCar.jpg";
        break;
    }
    this.setState({
      img,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={this.state.img} className="img-fluid" alt=""></img>
          </div>
          <div className="col-sm-6">
            <button
              className="btn btn-danger m-3 p-2"
              onClick={() => {
                this.changeColor("one");
              }}
            >
              One
            </button>
            <button
              className="btn btn-danger m-3 p-2"
              onClick={() => {
                this.changeColor("two");
              }}
            >
              {" "}
              Two
            </button>

            <button
              className="btn btn-danger m-3 p-2"
              onClick={() => {
                this.changeColor("there");
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
