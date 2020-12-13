import React from 'react';
import {useRouter} from 'next/router';
// import Blog from '../../components/blog';
// import Cafe from '../../components/cafe';
import NoteList from '../../../components/NoteList';

const Dynamic = () => {
    const router = useRouter();
    const {noteRouter} = router.query;
    return (
        <div>
            {
                noteRouter === "post" ? <NoteList/> : null
                // pagename === "cafe" ? <Cafe/> : null
            }
        </div>
    );
};

export default Dynamic;