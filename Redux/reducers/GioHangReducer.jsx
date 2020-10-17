// Mot trong nhung reducer dau tien
// Khởi tạo gía trị ban đầu của store
// Luu tru 1 bien, object, trang thai, du lieu thay doi trong tuong lai la stateGioHang (Reducer)
const stateGioHang = {
  gioHang: [],
};
// mac dinh gia tri 1 la gia tri ban dau cua gio hang, action la nhung gi gui du lieu len thay doi stateGioHang
// cho component tu render lai
// Quan ly nhung bien thay doi tren store
export const GioHangReducer = (state = stateGioHang, action) => {
  // console.log(action)
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // Xu ly logic them gio hang tai day
      // tinh bat bien, muon biet mang thay doi, phai tao mang moi
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
      // Gan gio hang moi cho state.gioHang => render lai giao dien
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "XOA_GIO_HANG_MSP": {
      let gioHangCapNhat = [...state.gioHang];
      // tim index sp dua vao ma sp
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHangCapNhat.splice(action.index, 1);
      }
      // Gan gio hang moi cho state.GioHang => render lai giao dien
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "TANG_GIAM_SO_LUONG": {
      const { index, tangGiam } = action;
      // console.log(action)
    //   Xu ly tang giam so luong
      let gioHangCapNhat = [...state.gioHang];
      if (tangGiam) gioHangCapNhat[index].soLuong += 1;
      else {
        if (gioHangCapNhat[index].soLuong > 1) {
          gioHangCapNhat[index].soLuong -= 1;
        }
      }
    //   cap nhat lai state cua GioHangReducer
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
  }
  // console.log("reduce", action)
  return { ...state };
};


