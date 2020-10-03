import React, { useState } from "react";

import QuillEditor from './QuillEditor';



const NoteTabContent = ({data}) => {    
    return (
        
        <div>            
            {data}
            <QuillEditor />
        </div>
    )
}

export default NoteTabContent;

