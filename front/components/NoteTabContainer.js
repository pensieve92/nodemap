import React, { useState } from "react";

// import QuillEditor from './QuillEditor';
import TuiEditor from './TuiEditor';



const NoteTabContiner = ({data}) => {    
    return (        
        <div>            
            {/* Title : {data} */}
            <TuiEditor />
        </div>
    )
}

export default NoteTabContiner;

