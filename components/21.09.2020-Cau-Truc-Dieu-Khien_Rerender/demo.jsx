import React, { Component } from "react";

export default class DemoAB extends Component {
  //   Thuộc tính
  isLogin = false;
  userName = "";

  renderContent = () => {
    if (this.isLogin) {
      //isLogin === true => người dùng đã đăng nhập
      this.userName = "An";
      return (
        <div>
          Hello An <button>Log Out</button>
        </div>
      );
    }
    return (
      <div>
        <button>Log In</button>
      </div>
    );
  };
  //   Phương thức
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
