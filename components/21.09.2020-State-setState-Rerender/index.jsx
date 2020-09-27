import React, { Component } from "react";
// hàm props, state, setState kế thừa từ component
export default class ESetState extends Component {
  constructor(props) {
    super(props);
    // this.state là thuộc tính có sẵn của component, chứa các thuộc tính có khả năng thay đổi bởi 1 sự kiện nào đó của component
    this.state = {
      isLogin: false,
      userName: "",
    };
  }
  login = () => {
    //   this.setState(): là phương thức kế thừa từ class component => thay đổi giá trị state và gọi hàm render
    // setState là phương thức bất đồng bộ, cần 1 khoảng thời gian tính toán và xử lý, nên các hàm khác vẫn chạy trước
    this.setState(
      {
        isLogin: true,
        userName: "Chuối",
      },
      //   Kiểm tra thời điểm chạy xong của setState
      () => {
        console.log(this.state);
      }
    );
  };
  logout = () => {
    this.setState(
      {
        isLogin: false,
        userName: "Bưởi",
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <div>
            Hello {this.userName} ! Cyber{" "}
            <button onClick={this.logout}>Log Out</button>
          </div>
        ) : (
          <button onClick={this.login} Login>
            LogIn
          </button>
        )}
      </div>
    );
  }
}
