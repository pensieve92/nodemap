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
        {
            title: 'Title 3',
            },
            {
            title: 'Title 4',
            }
      ];

    return (
        <div 
            // style={{ height:'100%', overflowY: 'auto', margin:'1rem'}}
            >
            <div>NoteHome</div>
            <div>잔디밭</div>
            <div>
                즐겨찾기 2X3
                <List     
                    style={{width:'100%'}}               
                    // grid={{
                    //     gutter: 16,
                    //     xs: 1,
                    //     sm: 2,
                    //     md: 2,
                    //     lg: 3,
                    //     xl: 3,
                    //     xxl: 3,
                    //   }}
                    grid={{ gutter: 16, column: 2 }}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <NoteCard title={item.title}>Card content</NoteCard>
                    </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default NoteHome;