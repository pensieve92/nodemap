import React from 'react';
import Head from 'next/head';
import { Input, Layout, Menu, Breadcrumb, PageHeader, Tag, Button, Divider, Row, Col, Tooltip, Typography } from 'antd'; 
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Paragraph, Text, Link } = Typography;
const ContentWrapper = styled.div`    
    padding: 0 4rem;
    height: calc(100vh - 10rem);  
`

const { Header, Content, Footer } = Layout;
const onSearch = value => console.log(value);
const Home = () => {
    return(
            <div>
                <Head>
                    <meta charSet="utf-8"/>
                    <title>Home | maessil</title>
                </Head>  

                <Layout className="layout">                  
                    <PageHeader
                        style={{height: '5rem'}}
                        title="매실하실??"                        
                        subTitle="매실것 좀 주소~"
                        extra={[
                            <Input.Search 
                                key="1"
                                placeholder="input search text" 
                                onSearch={onSearch} 
                                enterButton 
                                style={{width: '10rem'}}/>,
                            <Button key="3" type="primary">회원가입</Button>,                   
                            ]}                                           
                        avatar={{ src: '/maessil.png' }}                        
                    />
                    <ContentWrapper>                    
                        {/* <div className="site-layout-content">Content</div> */}
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
                                    <div style={{height: '23rem', backgroundColor:'white', borderRadius:'0.5rem', padding: '0.5rem'}}>
                                        <Divider orientation="left">ID</Divider>
                                             <Input
                                                name='user_id'
                                                placeholder="Enter your id"
                                                prefix={<UserOutlined className="site-form-item-icon" />}
                                                suffix={
                                                    <Tooltip title="Extra information">
                                                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                                    </Tooltip>
                                                }
                                            />
                                        <Divider orientation="left">E-MAIL</Divider>
                                        <Input name='user_email' type="email" placeholder="input email"/>
                                        <Divider orientation="left">PASSWORD</Divider>
                                        <Input.Password name='user_password' placeholder="input password" />
                                        <Button type="primary"  style={{height:'4rem', width:'100%', marginTop:'1rem', fontWeight:'600', fontSize:'1.5rem'}}> Sign up for MaeSsil</Button>
                                    </div>
                                </Col>                         
                            </Row>
                    </ContentWrapper>
                    <Footer style={{ textAlign: 'center', height: '5rem' }}>maessil.com ©2020 Created by BH JEON</Footer>
                </Layout>                              
            </div>
        )
    };

export default Home;