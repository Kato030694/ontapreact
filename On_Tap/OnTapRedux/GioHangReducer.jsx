// Khoi tao gia tri ban dau cua store
const stateGioHang = {
  gioHang: [
    {
      maSP: "VL",
      tenSP: "VinSmart Live Belike",
      soLuong: 1,
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  ],
};
export const GioHangReducer = (state = stateGioHang, action) => {
  // console.log(action);
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // Xu ly logic them gio hang tai day
      // Redux co tinh bat bien, muon biet gio hang thay doi, phai tao mang moi moi chiu
      // Gan gia tri se khong thay doi, se bao loi compe la khong the gan gia tri
      // Nen muon thay doi phai thay doi ca 1 state, nen pahi tao ra 1 cai gio hang sao chep va xu ly tren gio hang do
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGioHang);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      // Xoa gio hang dua vao index
      gioHangCapNhat.splice(action.index, 1);
      // Gan gio hang moi cho state.gioHang
      // => render lai giao dien
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "XOA_GIO_HANG_MASP": {
      let gioHangCapNhat = [...state.gioHang];
      // tim index san pham dua vao ma sp
      let index = gioHangCapNhat.findIndex(
        (spGioHang) => spGioHang.maSP === action.maSP
      );
      if (index !== -1) {
        // Xoa Gio Hang
        gioHangCapNhat.splice(index, 1);
      }

      // Gan gio hang moi cho state.gioHang
      // => render lai giao dien
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "TANG_GIAM":{
      const {index, tangGiam} = action;
      let gioHangCapNhat = [...state.gioHang];
      // tim index san pham dua vao ma SP
      if(tangGiam){
        gioHangCapNhat[index].soLuong +=1;
      }else{
        if(gioHangCapNhat[index].soLuong > 1){
          gioHangCapNhat[index].soLuong -=1;
        }
      }
      // Cap nhat lai state cua gioHangReducer
      state.gioHang = gioHangCapNhat;
      return {...state}
    }
  }
  return { ...state };
};
