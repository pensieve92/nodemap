import React from "react";
import { Viewer } from "@toast-ui/react-editor";

const TuiEditorViewerWrapper = (props) => {
    return (<Viewer {...props} ref={props.forwardedRef} />)
}

export default TuiEditorViewerWrapper;