import React, { useEffect }  from 'react';
import { Row, Col, Spin } from 'antd'; 

import styled from 'styled-components';
import NoteTab from './NoteTab';
import NoteHome from './NoteHome';
import NoteMenu from './NoteMenu';
import NoteList from './NoteList';
import NoteViewer from './NoteViewer';
import NoteContentHeader from './NoteContentHeader';
import NoteLeftMenu from './NoteLeftMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { notePathUpdate } from '../slices/note';

const ContentWrapper = styled.div`
        height: calc(100vh - 3.5rem);
    `

const NoteContentLayout = () => {
    const router = useRouter();
    const { noteRouter }  = router.query;
    console.log(router.query);
    console.log("noteContentLayoutNoteRouter", noteRouter); 

    const dispatch = useDispatch();
    useEffect(() => {
        if(noteRouter === "home" ){
            dispatch(notePathUpdate({notePath: {}}));
        }
    }, [noteRouter])
    
    // const dispatch = useDispatch();

    // const { me } = useSelector((state) => state.user);    

    // const handleLogout = () => {        
    //     dispatch(logOutRequest());  
    // }
    return (
        <ContentWrapper>                    
            <Row justify="start" style={{height:'calc(100vh - 3.5rem)'}}>
                
                <Col flex="200px" style={{backgroundColor: 'white'}} >
                    <NoteLeftMenu />  
                </Col>
                
                <Col flex="auto" 
                    style={{
                        width: 'calc(100vw - 200px)', 
                        height: 'calc(100vh - 3rem)',
                        overflowY:'auto', 
                        backgroundColor: 'rgba(242,245,245,0.8)',
                        padding:'0.5rem 1.5rem 1.5rem'
                    }}>                    
                    <Spin size="large" spinning={false} delay={500}>
                        <NoteContentHeader />
                        {/* Note Dynamic Router */}
                        {
                            noteRouter === ""          ? <NoteHome/> : 
                            noteRouter === "home"      ? <NoteHome/> : 
                            noteRouter === "postList"  ? <NoteList/> : 
                            noteRouter === "post"      ? <NoteList/> :                             
                            noteRouter === "editor"    ? <NoteTab/> : 
                            noteRouter === "viewer"    ? <NoteViewer/> : null
                        }
                    </Spin>
                </Col>
            </Row>
        </ContentWrapper>
    )
}

export default NoteContentLayout;