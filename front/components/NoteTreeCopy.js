import { useCallback, useEffect, useState } from 'react';
import { Tree } from 'antd';
import { DownOutlined, PlusCircleOutlined, EditOutlined, MinusCircleOutlined } from '@ant-design/icons';

import { deepClone } from '../utils'

const Demo = () => {
  const [gData, setGData] = useState([
    {
      title: "LIBRARY",
      key: "0",
      children: [
        {
          title: "0-0", 
          key: "0-0",     
          children: [
            {
              title: "0-0-0", 
              key: "0-0-0", 
              children: [
                {
                  title: "0-0-0-0", 
                  key: "0-0-0-0"             
                },
                {
                  title: "0-0-0-1", 
                  key: "0-0-0-1"             
                }
              ]
            },  
          ]
        }
      ]
    } 
  ]);
  const [expandedKeys, setExpandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);
  const [selectedKey, setSelectedKey] = useState('');
  const [createNodeTitle, setCreateNodeTitle] = useState('');
  const [updateNodeTitle, setUpdateNodeTitle] = useState('');
  const [isDeleteNode, setIsDeleteNode] = useState(false);

  // useEffect(()=>{
  //   //
  // }, [expandedKeys])

  useEffect(()=>{
    console.log("마운트 될 때만 실행하고 싶을 때");
    const data = deepClone(gData);
    if(createNodeTitle){
      const addObj = { 'title': createNodeTitle };
      findNodeKey(data, selectedKey, (item, index, arr) => {
        if((item.children || []).length > 0 ){
          addObj.key = selectedKey + "-" + item.children.length;            
          item.children.unshift(addObj);
          setGData(data);
        }else{
          addObj.key = selectedKey + "-0" ;
          item.children = [];
          item.children.unshift(addObj);
          setGData(data);
        }      
      });
    }else if(updateNodeTitle){
      findNodeKey(data, selectedKey, (item, index, arr) => {
        item.title = updateNodeTitle;
        setGData(data);
      });
    }else if(isDeleteNode){
      findNodeKey(data, selectedKey, (item, index, arr) => {
        arr.splice(index, 1);
        console.log(arr);
        setGData(data);
      });
      
    } 
    return () => {  
      console.log("언마운트 업데이트전 clean up");
      setCreateNodeTitle('');
      setUpdateNodeTitle('');
      setIsDeleteNode(false);
      setGData(data);
    }
  }, [createNodeTitle, updateNodeTitle, isDeleteNode])

  const onDragEnter = useCallback((info) => {
    console.log(info);   
  }, []);

  const onDrop = useCallback((info) => {
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };

    const data = deepClone(gData);

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
     // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    } else if (
      (info.node.children || []).length > 0 && // Has children
      info.node.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }
    setGData(data);    
  }, [gData]);

  const onSelect = useCallback((selectedKeys, event) => {
    setSelectedKey(event.node.key);
  }, []);

  const onDoubleClick = useCallback((event, node) => {
    event.persist();
    console.log(node);
  }, []);

  const generateData = (_tns, selectedKey) => {  
    // const tns = _tns || gData;    // _tns (배열) 매개변수가 없으면 gData를 받아서 사용한다.      
    const tns = _tns;
    if(tns.length > 0){
      for(let i = 0; i< tns.length; i++ ){
        const title = tns[i].title;
        const treeNode = (
          <div>
            {title}
            <div style={{float:"right"}}>
              <PlusCircleOutlined 
                onClick={    // FIXME   
                  () => {
                    const createNodeTitle = prompt("노드 생성");
                    if(!createNodeTitle){
                      return;
                    }else{
                      setCreateNodeTitle(createNodeTitle);
                    }
                  }
                }
              />
              <EditOutlined                 
                onClick={
                  () => {
                    const  updateNodeTitle = prompt("노드 수정");
                    if(!updateNodeTitle){
                      return;
                    }else{
                      setUpdateNodeTitle(updateNodeTitle);
                    }
                  }
                }
              />
              <MinusCircleOutlined  onClick={                
                () => {
                  const isDeleteNode = confirm("삭제하시겠습니까?")
                  if(isDeleteNode){
                    setIsDeleteNode(isDeleteNode);
                  } else{
                    return;
                  }
                }
              } />
            </div>
          </div>
        );
        tns[i].title = treeNode;      
        if(tns[i].children){
          generateData(tns[i].children);
        }
      }
    }
    return tns;
  };

  const findNodeKey = (data, key, callback) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].key === key) {  // i차에 key가 있을경우
        return callback(data[i], i, data);  
      }
      if (data[i].children) {     // i차에 key가 없고, children이 있을경우 
        findNodeKey(data[i].children, key, callback);  // children에서 key를 찾기 loop
      }
    }
  };
 
  return (
    <Tree
      className="draggable-tree"
      defaultExpandedKeys={expandedKeys}
      draggable
      blockNode
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      onSelect={onSelect}
      onDoubleClick={onDoubleClick}
      showLine={{showLeafIcon: false}}
      switcherIcon={<DownOutlined />}
      treeData={generateData(deepClone(gData))}
    />
  )
}


export default Demo;
