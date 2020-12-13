import React from 'react';
import { PageHeader, Button, Breadcrumb } from 'antd';
import { HomeOutlined, ReadOutlined  } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';


const NoteHeader = () => {
    const router = useRouter();
    const {noteRouter, selectedKey} = router.query;
    
    console.log("router.query noteRouter", noteRouter);
    const { notePath } = useSelector((state) => (state.note));
    // notePath가 배열로 return 됨.
    console.log("NoteHeader-notePath", notePath);
    
    return (
        <PageHeader
            className="site-page-header"
            onBack={() => router.back()}
            title={ 
                <div>
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link href="/note/[noteRouter]" as="/note/home">
                                    <a><HomeOutlined /></a>
                                </Link>
                            </Breadcrumb.Item>
                            { noteRouter !== "home" &&
                                <>
                                { notePath.children &&
                                    <Breadcrumb.Item>
                                        <a>
                                            <span style={{paddingLeft:'0.25rem'}}>{notePath.title}</span>
                                        </a>
                                    </Breadcrumb.Item>
                                }
                                <Breadcrumb.Item>
                                    <Link href={{  
                                                    pathname: '/note/[noteRouter]',
                                                    query: { selectedKey: selectedKey },
                                                }}
                                        as={`/note/post?selectedKey=${selectedKey}`}
                                    > 
                                    { notePath.children ?
                                        <a>
                                            <ReadOutlined />
                                            <span style={{paddingLeft:'0.25rem'}}>
                                                { notePath.children.title }
                                            </span>
                                        </a>
                                        :
                                        <a>
                                            <ReadOutlined />
                                            <span style={{paddingLeft:'0.25rem'}}>
                                                { notePath.title }
                                            </span>
                                        </a>
                                    }
                                    </Link>                                    
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Post
                                </Breadcrumb.Item>
                                </>
                            }
                            
                        </Breadcrumb>
                    </div>
                </div>
            }
            style={{padding:'0'}}
            subTitle= ""
            extra={[
                <Button key="1" type="primary">
                    전체 보기
                </Button>,
                ]}
        />
        
    )    
}

export default NoteHeader;