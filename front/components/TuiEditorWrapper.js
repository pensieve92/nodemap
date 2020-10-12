import React from "react";
import { Editor } from "@toast-ui/react-editor";

const TuiEditorWrapper = (props) => {
    return (<Editor {...props} ref={props.forwardedRef} />)
}

export default TuiEditorWrapper;