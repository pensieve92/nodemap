import React, { useCallback } from 'react';
import { Input, Button, Divider, Row, Col, Tooltip, Typography, Form, Spin } from 'antd'; 
import { InfoCircleOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logInRequest } from '../slices/user'


import styled from 'styled-components';
import NoteTab from './NoteTab';
import NoteHome from './NoteHome';
import NoteMenu from './NoteMenu';

const ContentWrapper = styled.div`
        height: calc(100vh - 3.5rem);
    `

const NoteContent = () => {

    return (
        <>
        <ContentWrapper>                    
            <Row justify="start" style={{height:'calc(100vh - 3.5rem)'}}>                                                            
                <Col flex="200px" style={{backgroundColor: 'white'}} >
                    <Row justify="center" style={{margin: 'auto', height:'3.5rem'}}>
                        <Button 
                            style={{marginTop: '0.75rem', marginBattom: '0.75rem', marginLeft: '-1rem'}}
                            type='default'
                            shape="round" 
                            icon={<PlusOutlined />} 
                            size='large'
                        >
                            작성하기
                        </Button>                        
                    </Row>
                    <Row justify="start">
                        <NoteMenu />
                    </Row>
                    <Row justify="start">

                    </Row>
                </Col>                
                <Col flex="auto" 
                    style={{
                        width: 'calc(100vw - 200px)', 
                        height: 'calc(100vh - 3rem)',
                        overflowY:'auto', 
                        backgroundColor: 'rgba(242,245,245,0.8)',
                        padding:'1.5rem'
                    }}>
                    <Spin size="large" spinning={false} delay={500}>
                        <NoteHome />
                        {/* <NoteTab /> */}
                    </Spin>
                </Col>                                
                
                
            </Row>
        </ContentWrapper>
        </>
    )
}

export default NoteContent;