import { List } from 'antd';
import React from 'react';

import NoteCard from './NoteCard';

const NoteHome = () => {

    const data = [
        {
          title: 'Title 1',
        },
        {
          title: 'Title 2',
        },
        {
          title: 'Title 3',
        },
        {
          title: 'Title 4',
        },
      ];

    return (
        <>
            <div>NoteHome</div>
            <div>잔디밭</div>
            <div>
                즐겨찾기 2X3
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <NoteCard title={item.title}>Card content</NoteCard>
                    </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default NoteHome;