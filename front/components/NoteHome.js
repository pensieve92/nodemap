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
            <div style={{
              width:'100%',
              height: '7rem',
              borderRadius: '0.5rem', 
              backgroundColor: 'lime',
              marginBottom: '1rem',
              maxWidth: '43.75rem',
              
            }}
            >
              잔디밭
            </div>
            <div>
                <List     
                    style={{width:'100%'}}               
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                      }}
                    // grid={{ gutter: 16, column: 2 }}
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