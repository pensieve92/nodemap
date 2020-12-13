import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { notePathUpdate } from '../slices/note'

const NoteMenu = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { SubMenu } = Menu;
  const MenuList = [
    {
      id: "1",
      title: "Option 1",
      parent: null
    },
    {
      id: "2",
      title: "Option 2",
      parent: null
    },
    {
      id: "3",
      title: "Option 3",
      parent: null
    },
    {
      id: "4",
      title: "Option 4",
      parent: "3"
    },
    {
      id: "5",
      title: "Option 5",
      parent: "3"
    }
  ];

  const generateMenu = (menuList) => {
    return menuList.reduce(function(acc, curItem, curIndex, arr){        
        const children = arr.filter((item) => item.parent == curItem.id );
        if(children.length > 0) {
            curItem.children = children;
            acc.push(curItem);
        }else if(!curItem.parent){
            acc.push(curItem);
        }
        return acc
    }, [])
  }    
  const childMenu =  generateMenu(MenuList);

  const handleClick = e => {
    const menuId = e.key;
    // 선택된 메뉴
    const selectedMenu = MenuList.find((item) => item.id === menuId);
    // 부모 메뉴
    const parentMenu = MenuList.find((item) => item.id === selectedMenu.parent);
    
    if(parentMenu){
      parentMenu.children = selectedMenu;
      dispatch(notePathUpdate({notePath: parentMenu})); // {}로 감싸서 action.payload에서 구조분해할당
    }else{
      // notePath.push(selectedMenu);
      dispatch(notePathUpdate({notePath: selectedMenu})); // {}로 감싸서 action.payload에서 구조분해할당
    }

    // dispatch(notePathUpdate({notePath: parentMenu})); // {}로 감싸서 action.payload에서 구조분해할당

    router.push({
      pathname: '/note/post',
      query: { selectedKey: menuId },
    })
  };

  return (
      <Menu
        onClick={handleClick}
        style={{ width: 200, height:'calc(100vh - 7rem + 0.9rem)', overflowY: 'auto'}}
        defaultSelectedKeys={['libary']}
        defaultOpenKeys={['libary']}
        mode="inline"
      >
        <SubMenu key="libary" icon={<AppstoreOutlined />} title="libary">
          {
            childMenu.map((item) => {          
              return item.children ? 
              <SubMenu key={item.id} title={item.title}>
                {item.children.map((childItem) => {
                  return <Menu.Item key={childItem.id}>{childItem.title}</Menu.Item>
                })}
              </SubMenu>
              : <Menu.Item key={item.id}>{item.title}</Menu.Item>
            })
          }
      </SubMenu>
    </Menu>
  );
}

export default NoteMenu;