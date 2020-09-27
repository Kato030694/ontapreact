import React, { Component } from "react";

export default class Event extends Component {
  demoHello = (message) => {
    alert(message);
  };
  render() {
    let message = "Hello mọi người";
    return (
      <div className="container">
        {/* <button onClick={this.demoHello.bind(this, message)}>Hiển Thị</button> */}
        <button onClick={() => this.demoHello(message)}>Hiển Thị</button>
        {/* Function chỉ có 1 lần return, chỉ có 1 hàm*/}
        {/* callbackfunction nặc danh , function sẽ trả về 1 function có tham số khi thực thi*/}
      </div>
    );
  }
}
