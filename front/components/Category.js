import React from 'react';
import Link from 'next/link';
import {Card, Avatar, Button} from 'antd';

import {EditTwoTone} from '@ant-design/icons';
const Category = ({title, src}) => {
    return (
        <div>              
            <Link href={`/${title}`}><a>
                <Card hoverable style={{ width: "112px", borderRadius:"15px" }}>
                    <div style={{ justifyContent: "center", display: "flex", marginTop:"-1rem", marginBottom:"1rem" }}>
                        <Avatar 
                            gap={4}
                            size={74}
                            icon={<EditTwoTone />}
                            // src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"                        
                            // src={src}    // icon에서 src로 교체 예정
                        />
                    </div>
                    <div style={{ justifyContent: "center", display: "flex", marginBottom:"-1rem"}}>
                        <Button shape="round" size="middle" key={title}>{title}</Button>
                    </div>
                </Card>
            </a></Link>
        </div>
    );
}

export default Category;