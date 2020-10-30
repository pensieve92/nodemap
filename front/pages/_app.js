import React from "react";
import App from "next/app";

import "../styles/antd.less";

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
// import wrapper from "../store/configureStore";  // 1-4
import {wrapper} from "../store/store";  // 1-4


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);  // 1-4.