import React from "react";

const footer = (props) => {
  // truyên props dưới dạng tham số
  return <footer className="footer">{props.name}</footer>;
  //   sử dụng props, trong đó name là thuộc tính được truyền từ compopnent cha
};
export default footer;
// export để có thể gọi ở các component khác
