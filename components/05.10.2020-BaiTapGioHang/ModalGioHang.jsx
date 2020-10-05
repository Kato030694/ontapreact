import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    const { gioHang } = this.props; // lấy giữ liệu giohang từ bài tập giỏ hàng
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ maxWidth: "800px", width: "800px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Product</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <td>Ma SP</td>
                    <td>Hinh Anh</td>
                    <td>Ten SP</td>
                    <td>So Luong</td>
                    <td>Don Gia</td>
                    <td>Thanh Tien</td>
                  </tr>
                </thead>
                <tbody>
                  {gioHang.map((sanPham, index) => {
                    return (
                      <tr key={index}>
                        <td>{sanPham.maSP}</td>
                        <td>
                          <img src={sanPham.hinhAnh} width={50} height={50} />
                        </td>
                        <td>{sanPham.tenSP}</td>
                        <td><button>A</button>{sanPham.soLuong}<button>B</button></td>
                        <td>{sanPham.giaBan}</td>
                        <td>{sanPham.soLuong * sanPham.giaBan}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
