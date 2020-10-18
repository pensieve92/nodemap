import React from "react";
import { Tree } from "antd";
import { DownOutlined, PlusCircleOutlined, EditOutlined, MinusCircleOutlined } from '@ant-design/icons';

import { deepClone } from '../utils'

const gData = [
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
];

class Demo extends React.Component {
  state = {
    gData,
    expandedKeys: ["0-0", "0-0-0", "0-0-0-0"],
    editNodeMode: "", // creatNode, editNode, deleteNode    
    selectedKeys:[],
  };

  generateData = (_tns) => {  
    // const tns = _tns || gData;    // _tns (배열) 매개변수가 없으면 gData를 받아서 사용한다.  
    const tns = _tns;

    if(tns.length > 0){
      for(let i = 0; i< tns.length; i++ ){
        const title = tns[i].title;
        const treeNode = (
          <div>
            {title}
            <div style={{float:"right"}}>
              <PlusCircleOutlined onClick={                
                  (e) => {                   
                    // e.persist();
                    // e.preventDefault();                    
                    this.setState({editNodeMode: "creatNode"})
                  }
                }/>
              <EditOutlined                 
                onClick={
                  () => {this.setState({editNodeMode: "editNode"})}
                }
              />
              <MinusCircleOutlined  onClick={
                () => {this.setState({editNodeMode: "deleteNode"})}
              } />
            </div>
          </div>
        );
        tns[i].title = treeNode;      
        if(tns[i].children){
          this.generateData(tns[i].children);
        }
      }
    }
    return tns;
  };

  // FIXME 2
  // 버튼 클릭 이벤트 만들고, 만들기 ...
  // 추가, 수정, 삭제 버튼 클릭시, Flag변수로 해당하는 버튼 확인
  onSelect = (selectedKeys, event) => {
    this.setState({selectedKeys: selectedKeys});
    // console.log("onSelect selectedKeys", selectedKeys);
    // console.log("onSelect event", event);
  }

  onDoubleClick = (event, node) => {
    event.persist();
    console.log(node);
  }

  onDragEnter = (info) => {
    info.event.persist();
    // console.log("onDragEnter");
    // console.log(info.expandedKeys);
    // expandedKeys 需要受控时设置
    // const openExpandedKeys = info.expandedKeys.concat(info.node.key);
    this.setState({
      expandedKeys: info.expandedKeys
    });
  };

  onDrop = (info) => {
    info.event.persist();
    // console.log(info);
    // console.log(info.event);
    // console.log(info.expandedKeys);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);
    // const openExpandedKeys = this.state.expandedKeys.concat(info.node.key);

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
    const data = [...this.state.gData];

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
      loop(data, dropKey, (item) => {
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

    this.setState({
      gData: data
      // expandedKeys: openExpandedKeys
    });
  };

  editNode = () => {
    const editNodeMode = this.state.editNodeMode;
    const selectedKeys = this.state.selectedKeys;

    console.log(editNodeMode);
    if(editNodeMode == "creatNode"){
      prompt("creatNode", selectedKeys);
    }else if(editNodeMode == "editNode"){
      prompt("editNode", selectedKeys);
    }else if(editNodeMode == "deleteNode"){
      prompt("deleteNode", selectedKeys);
    }else {
      return;
    }
  }

  render() {

    return (
      <>        
        {this.editNode()}
        <Tree        
          className="draggable-tree"
          defaultExpandedKeys={this.state.expandedKeys}
          draggable
          blockNode
          onSelect={this.onSelect}
          onDoubleClick={this.onDoubleClick}
          onDragEnter={this.onDragEnter}
          onDrop={this.onDrop}
          treeData={this.generateData(deepClone(this.state.gData))}
          showLine={{showLeafIcon: false}}
          switcherIcon={<DownOutlined />}
        />      
      </>
    );
  }
}

export default Demo;
