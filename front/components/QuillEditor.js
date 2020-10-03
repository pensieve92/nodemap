import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
`
const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
    width : 80%;
    margin-top : 10px;
  .ql-editor {
    padding: 0;
    padding-left : 10px;
    min-height: 10vh;
    font-size: 1.125rem;
    line-height: 1.5;
    overflow-y : scroll;
  }
  .ql-editor.ql-blank::before {
    left: 10px;
  }
  .ql-container {
    height : 50vh;
  }
`;



const QuillEditor = () => {
  const [content, setContent] = useState('');


  const Quill = typeof window === 'object' ? require('quill') : () => false;
  const imageRef = useRef();
  const quillElement = useRef(); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(); // Quill 인스턴스를 설정

  useEffect(() => { // quill editor 생성
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '내용을 작성하세요...',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });
    const quill = quillInstance.current;

    quill.on('text-change', (delta, oldDelta, source) => {
      if(source === 'user') {
       setContent(quill.root.innerHTML);
      }
    });

    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', onClickImageBtn)

    const clipboard = quill.getModule('clipboard');
    clipboard.addHandler
  }, []);

  const onClickImageBtn = useCallback(() => {
    imageRef.current.click()
  },[imageRef.current])  

  const memoDiv = useMemo(() => {
    return <div ref={quillElement}></div>
  })

  return (
    <DivWrapper>
      <QuillWrapper>
        {memoDiv}
      </QuillWrapper>
    </DivWrapper>
  )
}

export default memo(QuillEditor)
// export default QuillEditor;