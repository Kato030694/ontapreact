// Store chinh
import {combineReducers} from 'redux';
import {GioHangReducer} from "./GioHangReducer";
import {QuanLySinhVienReducer} from './QuanLySinhVienReducer';
// Tao store tong cho ung dung
export const RootReducer = combineReducers({
    // Noi se chua cac reduce cho nghiep vu (store con)
    GioHangReducer: GioHangReducer,
    QuanLySinhVienReducer: QuanLySinhVienReducer
})