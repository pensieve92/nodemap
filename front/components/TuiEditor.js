import dynamic from 'next/dynamic';
import React, { forwardRef, useCallback, useRef } from 'react';
const Editor = dynamic(() => import("./TuiEditorWrapper"), { ssr: false });
const EditorWithForwardedRef = forwardRef((props, ref) => (<Editor {...props} forwardedRef={ref} />));

const WysiwygEditor = (props) => {
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
            <EditorWithForwardedRef
            {...props}
            initialValue={initialValue || "hello react editor world!"}
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
export default WysiwygEditor;