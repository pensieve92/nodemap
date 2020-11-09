import React from 'react';
import Head from 'next/head';
import { Input, Layout, Menu, Breadcrumb, PageHeader, Tag, Button } from 'antd'; 
import styled from 'styled-components';

const ContentWrapper = styled.div`    
    padding: 0 50px;
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
                        <div className="site-layout-content">Content</div>
                    </ContentWrapper>
                    <Footer style={{ textAlign: 'center', height: '5rem' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>                              
            </div>
        )
    };

export default Home;