// -------------------------------- Importing Custom Store -----------------------------------

import configureStore from "./store/configureStore";
// import { ProjectAdded } from "./store/projects";
// import { BugAdded, BugResolved, getUnresolvedBugs,BugAssignedToUser ,getBugsByUser} from "./store/bugs";
// import { UserAdded } from "./store/users";
// import { BugRecieved } from './store/bugs'
import { loadbugs } from './store/bugs';
const store = configureStore();

// store.subscribe(() => {
//   console.log("Store Changed!!");
// });

//-------------dispatching projects -----------------
// store.dispatch(ProjectAdded({ name: "Project 1" }));
// store.dispatch(ProjectAdded({ name: "Project 2" }));
// store.dispatch(ProjectAdded({ name: "Project 3" }));

//Dispatching Users
// store.dispatch(UserAdded({ name: "User 1" }));
// store.dispatch(UserAdded({ name: "User 2" }));

// Dispatching Bugs
// store.dispatch(BugAdded({ description: "Bug 1 added.." }));
// store.dispatch(BugAdded({ description: "Bug 2 added.." }));
// store.dispatch(BugAdded({ description: "Bug 3 added.." }));
//----------------------dispatching assigned bugs to user -------------------------------
// store.dispatch(BugAssignedToUser({bugId: 1, userId: 1}));
// store.dispatch(BugAssignedToUser({bugId: 2, userId: 1}));

// store.dispatch(BugResolved({ id: 2 }));

// console.log(store.getState());

//------------------------ filtering of bugs by writing logic in this file --------------------------------
// const unResolvedBugs = store.getState().RootEntities.entities.bugs.filter(bug => !bug.resolved)

//------------------------ filtering of bugs by importing function from bugs slice --------------------------------
// const x = getUnresolvedBugs(store.getState());
// import { createStore } from 'redux';

// const y = getUnresolvedBugs(store.getState());

//------------------------filtering of bugs: will return bugs assigned to users -----------------------
// const bugs = getBugsByUser(2)(store.getState());
// const bugs1 = getBugsByUser(1)(store.getState());
// console.log(bugs);
// console.log(bugs1);
// console.log(x == y);

//getting the whole state of bugs
// console.log(store.getState());

// --------------------------------- dispatching functions --------------------------------------

// Actions must have a type property
// store.dispatch((dispatch, getState )=>{
//   dispatch({ type: 'bugsreceived', bugs: [1,2,3]})

//   console.log(getState());
// });

//===========Excercise:   Dispatching an action which will log error message ====================
// store.dispatch({
//   type: "error",
//   payload: {message: "An Error Occurred..."}

// });

//------------------------ Dispatch  ApiCallBegan action ----------------------
// store.dispatch({
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     onSuccess: "bugsReceived",
//     onError: "apiREquestFailed",
//   },
// });


//-------------------- Dispatching using action creators in the file itself --------------------------
// store.dispatch(
//   actions.apiCallBegan({
//     url: "/bugs",
//     // onSuccess: `${BugRecieved}`,
//     onSuccess: 'bugs/bugsReceived',
//     // onError: actions.apiCallFailed.type,                  don't use here; us it in the middleware
//   })
// );


//======================== After moving action creators in bugs file ===============================
store.dispatch(loadbugs());

// store.dispatch(
//   actions.apiCallBegan()
// );
