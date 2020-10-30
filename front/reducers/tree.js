export const initialState = {
    gData : [
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
      ],
    selectedKey : '',
}

export const UPDATE_TREE_ACTION = 'UPDATE_TREE_ACTION';

export const updateTreeAction = (data) => {
    return {
        type: UPDATE_TREE_ACTION,
        data
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_TREE_ACTION :  
        console.log('action.data: ', action.data);
            return {
                ...state,
                gData: action.data
            };
        default:
            return state;
    }
}

export default reducer; 