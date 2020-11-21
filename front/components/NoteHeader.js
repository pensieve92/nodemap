import React from 'react';
import { PageHeader, Button, Descriptions, Tag, Breadcrumb, Space } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';


const NoteHeader = () => {
    return (

        <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Title"
            style={{padding:'0'}}
            subTitle= // "sub Title"
                { 
                    <Space size="middle">
                        <div></div>
                        <div>
                            <Breadcrumb>
                                <Breadcrumb.Item href="">
                                    <HomeOutlined />
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="">
                                    <UserOutlined />
                                    <span>Application List</span>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>Application</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Space>
                }
                extra={[
                    <Button key="1" type="primary">
                        전체 보기
                    </Button>,
                    ]}
        />
        
    )    
}

export default NoteHeader;