import React, { Component } from "react";
import Header from "./Header";
import Slider from "./Slider";
import Product from "./Product";
import ProductList from "./ProductList";
import Footer from "./Footer";

export default class BaiTapCompenent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList />
        <Footer />
      </div>
    );
  }
}
