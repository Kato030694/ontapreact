// Store chinh
import {combineReducers} from 'redux';
import {GioHangReducer} from "./GioHangReducer";
// Tao store tong cho ung dung
export const RootReducer = combineReducers({
    // Noi se chua cac reduce cho nghiep vu (store con)
    GioHangReducer: GioHangReducer
})