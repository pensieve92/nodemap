import { Card, Space } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import Link from 'next/link'
import React from 'react';

const NoteCard = ({title}) => {
    return (
            <Card 
                // hoverable
                type='inner' 
                title={
                    <Space size="small">
                        <ReadOutlined /> 
                        <Link href="/">
                            <a>here is title</a>
                        </Link>
                    </Space>
                    } 
                extra={<a href="#">More</a>} 
            >
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            )
}

export default NoteCard;