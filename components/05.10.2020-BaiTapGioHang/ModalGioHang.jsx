import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiamSoLuong} = this.props; // lấy giữ liệu giohang từ bài tập giỏ hàng
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
                          <img
                            src={sanPham.hinhAnh}
                            width={50}
                            height={50}
                            alt=""
                          />
                        </td>
                        <td>{sanPham.tenSP}</td>
                        <td>
                          <button className="btn btn-primary" onClick={() =>tangGiamSoLuong(sanPham.maSP, false)}>-</button>
                          {sanPham.soLuong}
                          <button className="btn btn-primary" onClick={() =>tangGiamSoLuong(sanPham.maSP, true)}> +</button>
                        </td>
                        <td>{sanPham.giaBan.toLocaleString()}</td>
                        <td>{(sanPham.soLuong * sanPham.giaBan).toLocaleString()}</td>
                        {/* Xoa gio hang viet duoi dang callbackfunction */}
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => xoaGioHang(sanPham.maSP)}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                {/* tinh tong tien san pham */}
                <tfoot>
                  <tr>
                    <td colSpan="5"></td>
                    <td>Tong Tien</td>
                    <td>{
                      this.props.gioHang.reduce((tongTien,spGiohang, index) =>{
                        return tongTien += (spGiohang.soLuong * spGiohang.giaBan).toLocaleString()
                      }, 0)
  }</td>
                  </tr>
                </tfoot>
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
