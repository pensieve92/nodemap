import React, { useCallback } from 'react';
import { Input, Button, Divider, Row, Col, Tooltip, Typography } from 'antd'; 
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import Form from 'antd/lib/form/Form';

const InitContent = () => {
    const { Title, Paragraph, Text, Link } = Typography;
    const ContentWrapper = styled.div`    
        padding: 0 4rem;
        height: calc(100vh - 10rem);  
    `

    const [logInLoading, onChangeLoginLoading, setIsLoggedIn ]= useInput(false);
    const [email, onChangeEmail] = useInput('pensieve92@gmail.com');
    const [password, onChangePassword] = useInput('123456');

    const onSubmitForm = useCallback(() => {
        console.log(email, password);        
        setIsLoggedIn(true);
        // dispatch(loginRequestAction({email, password}));        
    }, [email, password]);


    return (
        <>
        <ContentWrapper>                    
            <Divider orientation="left">Hellow MaeSsil</Divider>
                <Row justify="center">                                                            
                    <Col span={16}>
                        <div style={{height: '23rem', padding: '0.5rem'}}>
                        <Title level={2}>Guidelines and Resources</Title>
                            <Paragraph>
                            We supply a series of design principles, practical patterns and high quality design resources
                            (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
                            prototypes beautifully and efficiently.
                            </Paragraph>
                            <Paragraph>
                            We supply a series of design principles, practical patterns and high quality design resources
                            (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
                            prototypes beautifully and efficiently.
                            </Paragraph>
                            <Paragraph>
                            We supply a series of design principles, practical patterns and high quality design resources
                            (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
                            prototypes beautifully and efficiently.
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>
                                    <Link href="/docs/spec/proximity">Principles</Link>
                                    </li>
                                    <li>
                                    <Link href="/docs/pattern/navigation">Patterns</Link>
                                    </li>
                                    <li>
                                    <Link href="/docs/resource/download">Resource Download</Link>
                                    </li>
                                </ul>
                            </Paragraph>
                        </div>
                    </Col>                                
                    <Col span={8}>
                        <Form onFinish={onSubmitForm}> 
                            <div style={{height: '23rem', backgroundColor:'white', borderRadius:'0.5rem', padding: '0.5rem'}}>                                        
                                <Divider orientation="left">E-MAIL</Divider>
                                <Input name='user_email' 
                                    type="email"
                                    value={email} 
                                    onChange={onChangeEmail} 
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    suffix={
                                        <Tooltip title="Extra information">
                                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                        </Tooltip>
                                    }
                                    placeholder="input email"
                                    required
                                />
                                <Divider orientation="left">PASSWORD</Divider>
                                <Input.Password 
                                    name='user_password' 
                                    value={password} 
                                    onChange={onChangePassword} 
                                    placeholder="input password" 
                                    required
                                />
                                <Button 
                                    type="primary" 
                                    htmlType="submit"
                                    loading={logInLoading}                                                
                                    style={{height:'4rem', width:'100%', marginTop:'1rem', fontWeight:'600', fontSize:'1.5rem'}}
                                >
                                    LOGIN
                                </Button>
                            </div>
                        </Form>
                    </Col>                         
                </Row>
        </ContentWrapper>
        </>
    )
}

export default InitContent;