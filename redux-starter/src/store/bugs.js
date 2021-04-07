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
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
//-------------------------- Actions with ActionCreators -----------------
// export const BugAdded = createAction("BUG_ADDED");
// // console.log(BugAdded({id: 1}));
// export const BugResolved = createAction("BUG_RESOLVED");
// export const BugRemoved = createAction("BUG_REMOVED");

// --------------------- REDUCER using toolkit's  Actions & ActionCreators -------------------
// let lastId = 0;

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
// const slice = createSlice({
//     name: 'bugs',
//     initialState: [],
//     reducers: {

//         // actions => action handlers
//         BugAssignedToUser: (bugs, action) =>{
//             const {bugId, userId} = action.payload;

//             const index = bugs.findIndex(bug => bug.id === bugId);
//             bugs[index].userId = userId;
//         },
//         BugAdded: (bugs,action) => {
//             bugs.push({
//                       id: ++lastId,
//                       description: action.payload.description,
//                       resolved: false,
//                     });
//         },

//         BugResolved: (bugs,action) =>{
//             const index = bugs.findIndex(bug => bug.id === action.payload.id);
//                 bugs[index].resolved = true;
//         },
//         BugRecieved: (bugs,action) =>{
//                 console.log("In BUG RECVEIVED---", action.payload)
//                 bugs.push(...action.payload);
//         }
//     }
// })

// -------------------- Actions need to be imported as named export & reducer needs to be imported as default export--------------------------
// export const {BugAdded, BugResolved ,BugAssignedToUser,BugRecieved} = slice.actions;
// export default slice.reducer;

//Selector
// export const getUnresolvedBugs =  (state) => state.RootEntities.entities.bugs.filter(bug => !bug.resolved)

// export const getUnresolvedBugs = createSelector(
//   (state) => state.RootEntities.entities.bugs,
//   (bugs) => bugs.filter((bug) => !bug.resolved)
// );

// export const getBugsByUser = (userId) =>
//   createSelector(
//     (state) => state.RootEntities.entities.bugs,
//     (bugs) => bugs.filter((bug) => bug.userId === userId)
//   );

//==================================Restructuring the store ====================
const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    // lastfetch: null,   //for caching
  },
  reducers: {
    // actions => action handlers

    BugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    BugsRequestFailed: (bugs,action) => {
      bugs.loading = false;
    },
    BugRecieved: (bugs, action) => {
      console.log("In BUG RECVEIVED---", action.payload);
      //   bugs.list.push(...action.payload);
      bugs.list = action.payload;
      bugs.loading = false;
      // bugs.lastfetch = Date.now();
    },
    BugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;

      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },
    BugAdded: (bugs, action) => {


      // bugs.list.push({
      //   id: ++lastId,
      //   description: action.payload.description,
      //   resolved: false,
      // });
      bugs.list.push(action.payload);

    },

    BugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
  },
});

// -------------------- Actions need to be imported as named export & reducer needs to be imported as default export--------------------------

export const {
  BugAdded,
  BugResolved,
  BugAssignedToUser,
  BugRecieved,
  BugsRequested,
  BugsRequestFailed
} = slice.actions;
export default slice.reducer;

//=============================== Actions Creators =====================================
const url = "/bugs";
export const loadbugs = () => {
  return apiCallBegan({
    url,
    // onSuccess: `${BugRecieved}`,
    onStart: BugsRequested.type,
    onSuccess: BugRecieved.type,
    onError: BugsRequestFailed.type
    // onError: actions.apiCallFailed.type,                  don't use here; us it in the middleware
  });
};


export const addBug = bug => apiCallBegan({
  url,
  method:"post",
  data: bug,
  onSuccess: BugAdded.type
});

//Selectors
export const getUnresolvedBugs = createSelector(
  (state) => state.RootEntities.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.RootEntities.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
