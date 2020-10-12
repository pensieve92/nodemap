import React from "react";
// import { Editor } from "@toast-ui/react-editor";
import { Tree } from "antd";

const NoteTreeWrapper = (props) => {
    return (<Tree {...props} ref={props.forwardedRef} />)
}

export default NoteTreeWrapper;