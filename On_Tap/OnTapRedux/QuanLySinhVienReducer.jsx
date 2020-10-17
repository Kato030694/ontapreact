const stateDefault = {
  dssv: [
    {
      maSV: 1,
      hoTen: "NGuyen Van A",
      soDienThoai: "0977293694",
      email: "nguyenvana@gmail.com",
    },
  ],
};
export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      // Them du lieu Sinh Vien vao mang Sinh Vien
      const mangSinhVien = [...state.dssv, action.sinhVien];
      state.dssv = mangSinhVien;
      return { ...state };
      // console.log(action);
    }
    case "XOA_SINH_VIEN": {
      // Xoa sinh vien tren tableSinhVien
      // const maSV = action.maSV;
      var updateState = [...state.dssv];
      console.log(updateState);
      const index = updateState.findIndex((deleteSV) => deleteSV.maSV === action.maSV);
      if(index !== -1){
          updateState.splice(index, 1);
      }
      state.dssv = updateState;
      return {...state};
     
    }
  }
  return { ...state };
};
