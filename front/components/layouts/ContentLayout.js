import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { MenuOutlined, AppstoreOutlined } from '@ant-design/icons';
import { PageHeader, Input, Button, Avatar, Row, Typography } from 'antd';


const ContentLayout = ({children, title, onCollapse}) => {   

    return (
        <>            
            <PageHeader
                title={
                    <div style={{display: "flex",marginRight: "10rem"}}>
                        <Button 
                            type="default" 
                            shape="circle"
                            size="large"
                            icon={<MenuOutlined/>}                    
                            style={{marginRight: "1rem"}}
                            onClick={onCollapse}
                            />
                            <Typography.Title>
                                {title}
                            </Typography.Title>
                    </div>
                    }                
                className="site-page-header"
                subTitle={[<Input.Search key="1"style={{borderRadius: '5px'}}/>,
                        <Input.Search key="2"style={{borderRadius: '5px'}}/> ]}            
                extra={[               
                    <Avatar key="avatar" src='https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' />,                
                    <AppstoreOutlined key="menu"style={{fontSize: '2rem'}} />
                ]}          
            >  
            </PageHeader>        
            {children}        
        </>
    );
}
ContentLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default ContentLayout;