import React, {useState, useEffect} from 'react';
import {List} from 'antd';

import Category from '../components/Category';

const CategoryList = ({width, data}) => {
    
    return (
        <List
            style={{margin: "10px auto", width: width}}            // width resize시 width 변경
            grid={{
                gutter: 8,
                xs: 3,  // < 576 
                sm: 4,  // >= 576
                md: 5,  // >= 768
                lg: 5,  // >= 992
                xl: 5,  // >= 1200
                xxl: 5, // >= 1600
            }}
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Category key={item.title} title={item.title} />
            </List.Item>
            )}        
        />
    );
}

export default CategoryList;