import React from 'react';
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const Content = ({ children, extraContent }) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
};

const indexHeader = () => {
    return (
        <>
            <PageHeader
                title="Title"
                className="site-page-header"
                subTitle="This is a subtitle"
                tags={<Tag color="blue">Running</Tag>}
                extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">
                    Primary
                </Button>,
                <DropdownMenu key="more" />,
                ]}
                ///avatar={{ src: '../images/maessil.png' }}
                breadcrumb={{ routes }}
            >
                <Content
                extraContent={
                    <img
                    src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                    alt="content"
                    width="100%"
                    />
                }
                >
                </Content>
            </PageHeader>
        </>
    )
}

export default indexHeader;