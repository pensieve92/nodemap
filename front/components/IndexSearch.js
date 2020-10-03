import React from 'react';
import {Input} from 'antd';

const IndexSearch = ({width}) => {
    return (
        <div style={{justifyContent: "center", display: "flex"}}>            
            <Input.Search
                placeholder=""
                style={{width:width, borderRadius:"10px"}}
             />
        </div>
    );
}

export default IndexSearch;