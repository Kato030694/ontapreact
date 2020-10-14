import React, { Component } from 'react'
import DSSanPhamRedux from './DSSanPhamRedux'
import ModalGioHangRedux from './ModalGioHangRedux'

export default class BaiTapGioHangRedux extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-danger"> On Tap Gio Hang Redux</h3>
                <ModalGioHangRedux />
                <DSSanPhamRedux />
            </div>
        )
    }
}
