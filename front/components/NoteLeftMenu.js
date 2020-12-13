import { Button, Row } from 'antd'; 
import { PlusOutlined } from '@ant-design/icons';

import NoteMenu from './NoteMenu';
import { useRouter } from 'next/router';

const NoteLeftMenu = () => {  
    const router = useRouter()
    const handleClick = () => {
        router.push('/note/editor');
    }  
    return(
        <>
            <Row justify="center" style={{margin: 'auto', height:'3.5rem'}}>
                <Button 
                    onClick={handleClick}
                    style={{marginTop: '0.75rem', marginBattom: '0.75rem', marginLeft: '-1rem'}}
                    type='default'
                    shape="round" 
                    icon={<PlusOutlined />} 
                    size='large'
                >
                    작성하기
                </Button>                        
            </Row>
            <Row justify="start">
                <NoteMenu />
            </Row>   
        </>
    )
}

export default NoteLeftMenu;