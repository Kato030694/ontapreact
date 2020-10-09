// Mot trong nhung reducer dau tien 
// Khởi tạo gía trị ban đầu của store
const stateGioHang = {
    gioHang: []
}
export const GioHangReducer = (state= stateGioHang, action) =>{
    // console.log(action)
    switch(action.type)
    {
        case 'THEM_GIO_HANG': {
            // Xu ly logic them gio hang tai day
            // tinh bat bien, muon biet mang thay doi, phai tao mang moi
            let gioHangCapNhat = [...state.gioHang]
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if(index!== -1){
                gioHangCapNhat[index].soLuong += 1;
            }
            else{
                gioHangCapNhat.push(action.spGioHang)
            }
            state.gioHang = gioHangCapNhat;
            return {...state};
        }
        case 'XOA_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang]
            // Xoa gio hang dua vao index
            gioHangCapNhat.splice(action.index, 1);
            // Gan gio hang moi cho state.gioHang => render lai giao dien
            state.gioHang = gioHangCapNhat;
            return{...state};
        }
        case 'XOA_GIO_HANG_MSP':{
            let gioHangCapNhat = [...state.gioHang];
            // tim index sp dua vao ma sp
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
            if(index !== -1){
                gioHangCapNhat.splice(action.index,1);
            }
            // Gan gio hang moi cho state.GioHang => render lai giao dien
            state.gioHang = gioHangCapNhat;
            return{...state};
        }
    }
    // console.log("reduce", action)
    return{...state}
}