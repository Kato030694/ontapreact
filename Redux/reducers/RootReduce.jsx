import {combineReducers} from 'redux';
import {GioHangReducer} from "./GioHangReducer";
// Store tổng ứng dụng
export const rootReducer = combineReducers({
    // Là nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    // GioHangReducer la 1 cai ham, tra ve bien [...state]
    GioHangReducer: GioHangReducer
})
