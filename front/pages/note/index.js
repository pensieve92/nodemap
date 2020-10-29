import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import {Button} from 'antd';

import ContentLayout from '../../components/layouts/ContentLayout';
import NoteTree from '../../components/NoteTreeCopy';
import NoteTab from '../../components/NoteTab';

const Note = () => {
    const [callapse, setCollapse] = useState(false);
    const onCollapse = useCallback(() => {        
        setCollapse(!callapse);        
    }, [callapse]);

    return (    
        <ContentLayout title="Note" onCollapse={onCollapse}>
            <Head>
                <meta charSet="utf-8"/>
                <title>Note | NodeMap</title>
            </Head>            
            <div style={{display:"flex"}}>
                <div style={{width:"180px", marginRight:"10px"}} >
                    <Button style={{width:"140px", height:"50px", marginLeft:"20px", marginRight:"20px", marginBottom:"5px"}}>작성하기</Button>
                    <NoteTree />
                </div>
                <NoteTab style={{width:"100%"}} />
            </div>
        </ContentLayout>
    )
};

export default Note;