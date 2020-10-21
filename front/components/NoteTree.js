import React from "react";
import { Tree } from "antd";
import { DownOutlined, PlusCircleOutlined, EditOutlined, MinusCircleOutlined } from '@ant-design/icons';

import { deepClone } from '../utils'

const gData = [
  {
    title: "HOME",
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
];

class Demo extends React.Component {
  state = {
    gData,
    expandedKeys: ["0", "0-0", "0-0-0", "0-0-0-0"],
    editNodeMode: "", // createNode, updateNode, deleteNode    
    createNodeTitle: "",
    updateNodeTitle: "",
    isDeleteNode: false,
    selectedKey:"",
  };
 
  generateData = (_tns, selectedKey) => {  
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
                      this.setState({createNodeTitle: createNodeTitle})
                    }
                  }
                }
              />
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

  onSelect = (selectedKeys, event) => {
    this.setState({selectedKey: event.node.key});
  };

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

  findNodeKey = (data, key, callback) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].key === key) {  // i차에 key가 있을경우
        return callback(data[i], i, data);  
      }
      if (data[i].children) {     // i차에 key가 없고, children이 있을경우 
        this.findNodeKey(data[i].children, key, callback);  // children에서 key를 찾기 loop
      }
    }
  }; 

  // component update시, render 후 실행
  componentDidUpdate(prevProps, prevState, snapshot) {    
    if (this.state.editNodeMode !== prevState.editNodeMode) {
      this.setState({editNodeMode: ""})
    }
    if (this.state.createNodeTitle !== prevState.createNodeTitle) {
      this.setState({createNodeTitle: ""})
    }
    if (this.state.updateNodeTitle !== prevState.updateNodeTitle) {
      this.setState({updateNodeTitle: ""})
    }
    if (this.state.isDeleteNode !== prevState.isDeleteNode) {
      this.setState({isDeleteNode: ""})
    }
  }

  render() {    
    const selectedKey = this.state.selectedKey;    
    const treeData = this.generateData(deepClone(this.state.gData), selectedKey);

    const editNodeMode = this.state.editNodeMode;
    const data = [...this.state.gData];

    const createNodeTitle = this.state.createNodeTitle;
    const updateNodeTitle = this.state.updateNodeTitle;
    const isDeleteNode = this.state.isDeleteNode;

    if(createNodeTitle){
      const addObj = { title: createNodeTitle };
      this.findNodeKey(data, selectedKey, (item, index, arr) => {
        console.log("find selectec Object", item);
        if((item.children || []).length > 0 ){
          addObj.key = selectedKey + "-" + item.children.length;            
          item.children.unshift(addObj);            
        }else{
          addObj.key = selectedKey + "-0" ;
          item.children = [];
          item.children.unshift(addObj);  
          console.log("no children data", data);
        }      
      });
    } 

    // if(editNodeMode === "createNode"){
    //   // const title = prompt("creatNode", selectedKey);  
    //   if(!title) {
        
    //   }else {
    //     const addObj = { title: title };
    //     // Find dragObject    
    //     this.findNodeKey(data, selectedKey, (item, index, arr) => {
    //       console.log("find selectec Object", item);
    //       if((item.children || []).length > 0 ){
    //         addObj.key = selectedKey + "-" + item.children.length;            
    //         item.children.unshift(addObj);            
    //       }else{
    //         addObj.key = selectedKey + "-0" ;
    //         item.children = [];
    //         item.children.unshift(addObj);  
    //         console.log("no children data", data);
    //       }      
    //     });
    //   }
    // }else if(editNodeMode === "updateNode"){
    //   prompt("updateNode", selectedKey);
    // }else if(editNodeMode === "deleteNode"){
    //   prompt("deleteNode", selectedKey);
    // }else {
      
    // }

    return (
      <>        
        <Tree        
          className="draggable-tree"
          defaultExpandedKeys={this.state.expandedKeys}
          draggable
          blockNode
          onSelect={this.onSelect}
          onDoubleClick={this.onDoubleClick}
          onDragEnter={this.onDragEnter}
          onDrop={this.onDrop}
          treeData={treeData}
          showLine={{showLeafIcon: false}}
          switcherIcon={<DownOutlined />}
        />      
      </>
    );
  }
}

export default Demo;
