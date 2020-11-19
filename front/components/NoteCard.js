import { Card, Space } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import React from 'react';

const NoteCard = ({title}) => {
    return (
            <Card type='inner' title={<Space size="small"><ReadOutlined /> here is title</Space>} extra={<a href="#">More</a>} >
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            )
}

export default NoteCard;