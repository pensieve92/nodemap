import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Layout, PageHeader, Button } from 'antd'; 

import { logOutRequest } from '../slices/user';


const onSearch = value => console.log(value);
const NoteLayoutHeader = () => {
    const dispatch = useDispatch();

    const { me } = useSelector((state) => state.user);    

    const handleLogout = () => {        
        dispatch(logOutRequest());  
    }

    return (
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
    )
}

export default NoteLayoutHeader;