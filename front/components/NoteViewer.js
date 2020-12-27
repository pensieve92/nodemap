import React from 'react';
import { Row, Col } from 'antd';

import TuiEditor from './TuiEditor';
import TuiEditorViewer from './TuiEditorViewer';

const NoteViewer = () => {
 
    return (
        <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                <Col span={12}>
                    <TuiEditorViewer viewer={true}/>
                </Col>

                <Col span={12}>
                    <TuiEditorViewer viewer={true} initialValue={"<h1>hi</h1><h1>hi</h1><h1>hi</h1><h1>hi</h1><h1>hi</h1><h1>hi</h1><h1>hi</h1><h1>hi</h1><h1>hi</h1>"}/>
                </Col>
            </Row>  
        </>
    )
}

export default NoteViewer;