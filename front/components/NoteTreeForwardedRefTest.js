import React, { forwardRef } from "react";
// import { Tree } from "antd";
import { DownOutlined } from '@ant-design/icons';
import dynamic from "next/dynamic";

const Tree = dynamic(() => import("./NoteTreeWrapper"), { ssr: false });
const TreeWithForwardedRef = forwardRef((props, ref) => (<Tree {...props} forwardedRef={ref} />));

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || "0";
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

class Demo extends React.Component {
  state = {
    gData,
    expandedKeys: ["0-0", "0-0-0", "0-0-0-0"]
  };
  onClick = (event) => {
    event.persist();
    console.log(event);
    console.log(event.target);
  }

  onDoubleClick = (event) => {
    event.persist();
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
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

  render() {
    return (
      <div>
        <TreeWithForwardedRef        
          className="draggable-tree"
          defaultExpandedKeys={this.state.expandedKeys}
          draggable
          blockNode
          // onClick={this.onClick}
          onDoubleClick={this.onDoubleClick}
          onDragEnter={this.onDragEnter}
          onDrop={this.onDrop}
          treeData={this.state.gData}
          showLine={{showLeafIcon: false}}
          switcherIcon={<DownOutlined />}
        />
      </div>
    );
  }
}

export default Demo;
