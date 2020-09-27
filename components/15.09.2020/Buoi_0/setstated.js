import React, { Component } from "react";
export default class SetStated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  login = () => {
    this.setState({
      isLogin: true,
    });
  };
  username = "Long Ẩn";
  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <p>Giá trị Sai {this.username}</p>
        ) : (
          "Giá trị đúng" + <button onClick={this.login}>Đăng Nhập</button>
        )}
      </div>
    );
  }
}
