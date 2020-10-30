
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
		updateTree: (state, action) => {
            console.log("slice", action)
			state.gData = action.payload;
			// state.light = !! action.payload.light;
		},
	},
	// extraReducers: {
	// 	[HYDRATE]: (state, action) => action.payload.clock
	// }
});

// export const selectClock = state => state.clock;

export const {updateTree} = treeSlice.actions;

export default treeSlice.reducer;