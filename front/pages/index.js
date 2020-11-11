import React  from 'react';
import Head from 'next/head';
import { Input, Layout, PageHeader, Button } from 'antd'; 
import useInput from '../hooks/useInput';

import InitContent from '../components/initContent';


const { Header, Content, Footer } = Layout;
const onSearch = value => console.log(value);

const Home = () => {
    const [logInLoading, onChangeLoginLoading, setIsLoggedIn ]= useInput(false);

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
                    <InitContent />                            
                    <Footer style={{ textAlign: 'center', height: '5rem' }}>
                        maessil.com ©2020 Created by BH JEON
                    </Footer>
                </Layout>                              
            </div>
        )
    };

export default Home;