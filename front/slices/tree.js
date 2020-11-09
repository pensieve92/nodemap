
import {createSlice} from "@reduxjs/toolkit";

const treeSlice = createSlice({
	name: "tree",
	initialState: {
		gData: [
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
	},
	reducers: {
		updateTree: (state, action) => {// state 불변성유지
      console.log("slice", action);
			state.gData = action.payload;
			// state.light = !! action.payload.light;
    },
    updateTreeRequest: (state, action) => {
      console.log("slice", action);
			state.gData = action.payload;
			// state.light = !! action.payload.light;
    },
    updateTreeSuccess: (state, action) => {
      console.log("updateTreeSuccess", action);			
    },
    updateTreeFailure: (state, action) => {
      console.log("updateTreeFailure", action);
		},
	},
	// extraReducers: {
	// 	[HYDRATE]: (state, action) => action.payload.clock
	// }
});

// export const selectClock = state => state.clock;

export const { updateTree, updateTreeRequest, updateTreeSuccess, updateTreeFailure } = treeSlice.actions; // reducers에 updateTree가 action으로 
export const sName = treeSlice.name;
// export const sActions = treeSlice.actions;
export default treeSlice.reducer;
