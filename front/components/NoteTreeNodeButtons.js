import React from 'react';

const NoteTreeNodeButtons = (gData, selectedKey) => {  
    // const tns = _tns || gData;    // _tns (배열) 매개변수가 없으면 gData를 받아서 사용한다.      
    const tns = [...gData];
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
                    setisDeleteNode(isDeleteNode);
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
            NoteTreeNodeButtons(tns[i].children);
        }
      }
    }
    return tns;
  };

  export default NoteTreeNodeButtons;