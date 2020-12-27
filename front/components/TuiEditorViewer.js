import dynamic from 'next/dynamic';
import React, { forwardRef, useCallback, useRef } from 'react';
const Viewer = dynamic(() => import("./TuiEditorViewerWrapper"), { ssr: false });
const EditorViewerWithForwardedRef = forwardRef((props, ref) => (<Viewer {...props} forwardedRef={ref} />));

const WysiwygEditorViewer = (props) => {
    const { initialValue, previewStyle, height, initialEditType, useCommandShortcut } = props;
    const editorRef = useRef();
    const handleChange = useCallback(() => {
        if (!editorRef.current) {
            return;
        }
        const instance = editorRef.current.getInstance();
        const valueType = props.valueType || "markdown";
        // props.onChange(valueType === "markdown" ? instance.getMarkdown() : instance.getHtml());
    }, [props, editorRef]);
    return (
        <div>
            <EditorViewerWithForwardedRef
            {...props}
            initialValue={initialValue || "<h1>hi</h1>"}
            previewStyle={previewStyle || "vertical"}
            height={height || "600px"}
            initialEditType={initialEditType || "markdown"}
            useCommandShortcut={useCommandShortcut || true}
            ref={editorRef}
            onChange={handleChange}
            />
      </div>
      )    
};
export default WysiwygEditorViewer;