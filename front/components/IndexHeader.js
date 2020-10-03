import React from 'react';

import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row, Input, Avatar } from 'antd';
import { EllipsisOutlined, AppstoreOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: 'none',
          padding: 0,
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: 'top',
          }}
        />
      </Button>
    </Dropdown>
  );
};

const IndexHeader = () => {
    return (
        <PageHeader                        
            extra={[               
                <Avatar key="avatar" src='https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' />,
                <DropdownMenu key="more" />,
                <Button key="btn-search"><AppstoreOutlined style={{fontSize:"1.5rem"}} width="4" height="4"/></Button>,
            ]}            
        />
    );
}

export default IndexHeader;