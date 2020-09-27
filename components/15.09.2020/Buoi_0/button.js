import React, { Component } from "react";
export default class Button extends Component {
  //   Xử lý sự kiện suKien={this.handleOnclick}
  handleOnclick = () => {
    console.log("Demo Button");
  };
  //   Xử lý 1 sự kiện có tham số
  handleShow = (message) => {
    console.log(message);
  };
  // Lệnh điều kiện trong JSX
  isLogin = true;
  userName = "Long Ẩn";
  renderContent = () => {
    if (this.isLogin) {
      return <p>Xin Chào {this.userName}</p>;
    }
    return <button>Đăng Nhập</button>;
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOnclick}>Thông Báo</button>
        <button onClick={() => this.handleShow("Hello World")}>Xin Chào</button>
        {this.renderContent()}
        {/* Toán tử 3 ngôi */}
        {this.isLogin ? <p>Hello {this.userName}</p> : "Login là false"}
      </div>
    );
  }
}
