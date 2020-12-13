import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import Head from 'next/head';

import NoteLayout from '../../../components/layouts/NoteLayout';


const Note = () => {
    const dispatch = useDispatch();
    // 다이나믹 라우터 설정
    const router = useRouter();
    const { noteRouter }  = router.query;
    console.log("pageNoteRouter", noteRouter);
    
    const { me } = useSelector((state) => state.user);    
    
    // 로그아웃
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
                <NoteLayout />                
            </div>
        )
    };

export default Note;