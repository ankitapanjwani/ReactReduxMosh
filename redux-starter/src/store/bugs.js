// ------------------------------------------ By DUCKS Pattern ----------------------------------------------

// ----------------------------------Action Types / Action Creators / Reducers (Included In this File)----------------------------------------

//Action Types

// const ADD_BUG = "BUG_ADDED";
// const REMOVE_BUG = "BUG_REMOVED";
// const RESOLVED_BUG = "BUG_RESOLVED";

//Action Creators

//action creators must be exported
// export const BugAdded = (description) => ({
// type: ADD_BUG,
// payload: {
//     description,
// },
// });

// export const BugResolved = (id) => ({
// type: RESOLVED_BUG,
// payload: {
//     // id: id
//     id,
// },
// });

// export const BugRemoved = (id) => ({
// type: REMOVE_BUG,
// payload: {
//     // id: id
//     id,
// },
// });

//Reducers

// let lastId = 0;

//Reducer should be default export
// export default function reducer(state = [], action) {
// switch (action.type) {
//     case ADD_BUG:
//     return [
//         ...state,
//         {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//         },
//     ];

//     case REMOVE_BUG:
//     return state.filter((bug) => bug.id !== action.payload.id);

//     case RESOLVED_BUG:
//     return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//     );

//     default:
//     return state;
// }

// if(action.type ==='ADD_BUG')

// else if(action.type === 'REMOVE_BUG')

// return state;
// }

// ---------------------------------Using Toolkit -----------------------------------------------

import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

//-------------------------- Actions with ActionCreators -----------------
export const BugAdded = createAction("BUG_ADDED");
// console.log(BugAdded({id: 1}));
export const BugResolved = createAction("BUG_RESOLVED");
export const BugRemoved = createAction("BUG_REMOVED");

// --------------------- REDUCER using toolkit's  Actions & ActionCreators -------------------
let lastId = 0;

// Reducer should be default export
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case BugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];

//     case BugRemoved.type:
//       return state.filter((bug) => bug.id !== action.payload.id);

//     case BugResolved.type:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );

//     default:
//       return state;
//   }
// }

// --------------------- REDUCER using toolkit's  REDUCER -------------------

// export default createReducer([], {
// [BugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },
//   [BugResolved.type]: (bugs, action) => {
//     const index = bugs.findIndex(bug => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   },
// });

//---------------------------------------------CreateSlice Combines - Actions /ActionCreators / Reducers ----------------------------------------
createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {

        // actions => action handlers 
        
        BugAdded: (bugs,action) => {
            bugs.push({
                      id: ++lastId,
                      description: action.payload.description,
                      resolved: false,
                    });
        },

        BugResolved: (state,action) =>{
            
        }
    }
})