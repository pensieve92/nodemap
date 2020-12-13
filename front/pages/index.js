import React, { useEffect }  from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { Input, Layout, PageHeader, Button } from 'antd'; 
import useInput from '../hooks/useInput';

import InitContent from '../components/initContent';
import { useSelector } from 'react-redux';


const { Header, Content, Footer } = Layout;
const onSearch = value => console.log(value);

const Home = () => {
    const router = useRouter();
    
    const { me } = useSelector((state) => state.user);    
  
    useEffect(()=>{
        console.log("마운트 될 때만 실행하고 싶을 때");
        me && router.push('/note/home');
        return () => {  
          console.log("언마운트 업데이트전 clean up");
        }
      }, [me])

    return(
            <div>
                <Head>
                    <meta charSet="utf-8"/>
                    <title>Home | maessil</title>
                </Head> 
                
                <Layout className="layout">
                    <PageHeader
                        style={{height: '3.5rem'}}
                        title="매실하실?!"                        
                        subTitle="HOME"
                        extra={[
                            <Input.Search 
                                key="1"
                                placeholder="input search text" 
                                onSearch={onSearch} 
                                enterButton 
                                style={{width: '10rem'}}/>,
                                <Button key="3" type="primary">{me ? "로그아웃" : "회원가입"}</Button>,                   
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