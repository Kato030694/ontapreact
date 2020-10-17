import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems";
import { connect } from "react-redux";
import Axios from "axios";
class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center text-danger">
          Danh Sach Khoa Hoc
        </h1>
        <div className="container">
          <div className="row">
            {this.props.courseList.map((item, index) => (
              <div className="col-4">
                <CourseItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  //   giao dien render xong thi moi tien hanh keo tat ca du lieu ve
  componentDidMount() {
    // Chỉ chạy 1 lần
    // Return ve 1 doi tuong promise ES6
    // Handle viec tra du lieu cua JS, vi JS la bat dong bo
    // tra ve ham then neu thanh cong va tra ve ham catch neu that bai
    // axios xay dung theo kieu bat dong bo, nen khong doi ket qua tre ve.

    /**
     * GET: lấy dữ liệu
     * POST: thêm dữ liệu mới
     * PUT: ghi đè dữ liệu cũ
     * PATCH: cập nhật từng phần dữ liệu
     * DELETE: xóa phần  tử
     */
    Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    })
      //   promise
      .then((res) => {
        // console.log(res);
        this.props.dispatch({
          type: "FETCH_COURSES",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    //   console.log("12");
  }
}
const mapStateToProps = (state) => ({
  courseList: state.Courses.courses,
});

export default connect(mapStateToProps, null)(HomeScreen);
