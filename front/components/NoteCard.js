import { Card } from 'antd';
import React from 'react';

const NoteCard = ({title}) => {
    return (
            <Card type='inner' title="Default size card" extra={<a href="#">More</a>} >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            )
}

export default NoteCard;