import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";

class CoursesDetailScreen extends Component {
  render() {
    return (
      <div>
        <img src={this.props.coursesDetailList.hinhAnh} alt="Course Detail" />
        <h3>{this.props.coursesDetailList.tenKhoaHoc}</h3>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=Backend_01",
    })
      .then((res) => {
        this.props.dispatch({
          type: "FETCH_COURSES_DETAIL",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapStateToProps = (state) => ({
  coursesDetailList: state.Courses.coursesDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
}})

export default connect(mapStateToProps, null)(CoursesDetailScreen);
