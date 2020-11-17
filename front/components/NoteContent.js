import React, { useCallback } from 'react';
import { Input, Button, Divider, Row, Col, Tooltip, Typography, Form } from 'antd'; 
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logInRequest } from '../slices/user'

import styled from 'styled-components';
import NoteMenu from './NoteMenu';

const ContentWrapper = styled.div`
        height: calc(100vh - 3.5rem);
    `

const NoteContent = () => {

    return (
        <>
        <ContentWrapper>                    
            <Row justify="start" style={{height:'calc(100vh - 3.5rem)'}}>                                                            
                <Col flex="200px" style={{height:'calc(100vh - 3.5rem)', backgroundColor: 'white'}} >
                    <Row justify="start">
                        <Button style={{marginTop: '0.75rem', marginBattom: '0.75rem'}}> 작성하기 </Button>
                    </Row>
                    <Row justify="start">
                        <NoteMenu />
                    </Row>
                    <Row justify="start">

                    </Row>
                </Col>                
                <Col flex="auto" style={{backgroundColor: 'rgba(242,245,245,0.8)'}}>
                    <Row >

                    </Row>
                </Col>                                
                
                
            </Row>
        </ContentWrapper>
        </>
    )
}

export default NoteContent;