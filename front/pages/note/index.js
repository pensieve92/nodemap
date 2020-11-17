import React, { useEffect }  from 'react';
import Head from 'next/head';
import { Input, Layout, PageHeader, Button } from 'antd'; 
import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux';
import { logOutRequest } from '../../slices/user';
import NoteContent from '../../components/NoteContent';


const { Header, Content, Footer } = Layout;
const onSearch = value => console.log(value);

const Home = () => {
    const { me } = useSelector((state) => state.user);
    const router = useRouter();
    const dispatch = useDispatch();
    const handleLogout = () => {
        console.log("hanleLogout");
        dispatch(logOutRequest());  
    }

    useEffect(()=>{
        !me && router.push('/');
        return () => {  
        }
    }, [me])
    

    
    return(
            <div>
                <Head>
                    <meta charSet="utf-8"/>
                    <title>Note | maessil</title>
                </Head> 
                
                <Layout className="layout">
                    <PageHeader
                        style={{height: '3.5rem'}}
                        title="매실하실?!"                        
                        subTitle="NOTE"
                        extra={ 
                            me 
                            ?   [
                                    <Input.Search 
                                        key="1"
                                        placeholder="input search text" 
                                        onSearch={onSearch} 
                                        enterButton 
                                        style={{width: '10rem'}}
                                    />,                                
                                    <Button key="3" type="primary" onClick={handleLogout}>로그아웃</Button>,
                                ]
                            :   [
                                    <Input.Search 
                                    key="1"
                                    placeholder="input search text" 
                                    onSearch={onSearch} 
                                    enterButton 
                                    style={{width: '10rem'}}
                                />,                                
                                <Button key="3" type="primary">회원가입</Button>,
                                ] 
                        }                                           
                        avatar={{ src: '/maessil.png' }}                        
                    />
                    
                </Layout>                              
                <NoteContent />
            </div>
        )
    };

export default Home;