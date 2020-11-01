import React from "react";
import App from "next/app";

import "../styles/antd.less";

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
// import wrapper from "../store/configureStore";  // redux-toolKit 적용 전
import { wrapper } from "../store/store"; // redux-toolKit 적용 후
import withReduxSaga from 'next-redux-saga';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(withReduxSaga(MyApp));