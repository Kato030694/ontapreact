import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
export default class SignupScreen extends Component {

  _handleSubmit = (value) =>{
    console.log(value);
  }
  
  render() {
    return (
      // Xu ly form voi thu vien formik
      <div className="w-50 mx-auto">
        <Formik
          /**
           * initalValues giá trị ban đầu, hình hài objects xử lý trả ra
           * Object muốn ra gì, như thế nào.
           */
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: "",
            maNhom: "",
          }}
          /**
           * Submit form chạy hàm gì thì gắn vào hàm submit
           */
          onSubmit={this._handleSubmit}
          // render sẽ nhận 1 hàm formikProps sẽ xây dựng sẵn hàm Onchange và 1 số hàm xử
          // lý form
          render={(formikProps) => (
            <div>
              <h1 className="display-4 text-center">Sign Up</h1>
              <Form>
                <div className="form-group">
                  <label>Account: </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="taiKhoan"
                    onChange={formikProps.handleChange}
                  />
                </div>
              </Form>
              <Form>
                <div className="form-group">
                  <label>Password: </label>"
                  <Field
                    type="password"
                    className="form-control"
                    name="matKhau"
                    onChange={formikProps.handleChange}
                  />
                </div>
              </Form>
              <Form>
                <div className="form-group">
                  <label>Name: </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="hoTen"
                    onChange={formikProps.handleChange}
                  />
                </div>
              </Form>
              <Form>
                <div className="form-group">
                  <label>Email: </label>
                  <Field
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={formikProps.handleChange}
                  />
                </div>
              </Form>
              <Form>
                <div className="form-group">
                  <label>MobilePhone: </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="soDT"
                    onChange={formikProps.handleChange}
                  />
                </div>
              </Form>
              <Form>
                <div className="form-group">
                  <label>ID Group: </label>
                  <Field className="form-control" name="maNhom" onChange={formikProps.handleChange} as="select">
                    <option>GP01</option>
                    <option>GP02</option>
                    <option>GP03</option>
                    <option>GP04</option>
                    <option>GP05</option>
                    <option>GP06</option>
                    <option>GP07</option>
                    <option>GP08</option>
                    <option>GP09</option>
                    <option>GP10</option>
                  </Field>
                </div>
              </Form>
              <div className="text-center">
                <button className="btn btn-success">Submit</button>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
