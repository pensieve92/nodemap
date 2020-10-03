import React from "react";
import App from "next/app";

import "../styles/antd.less";
import "react-quill/dist/quill.snow.css";
import 'quill/dist/quill.bubble.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;