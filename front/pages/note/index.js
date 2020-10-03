import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import {Button} from 'antd';

import ContentLayout from '../../components/layouts/ContentLayout';
import NoteTree from '../../components/NoteTree';
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
                <div>
                    <Button>작성하기</Button>
                    <NoteTree />
                </div>
                <NoteTab />
            </div>
        </ContentLayout>
    )
};

export default Note;