// -------------------------------- Importing Custom Store -----------------------------------

import configureStore from "./store/configureStore";
import { ProjectAdded } from "./store/projects";
import { BugAdded, BugResolved, getUnresolvedBugs,BugAssignedToUser ,getBugsByUser} from "./store/bugs";
import { UserAdded } from "./store/users";


const store = configureStore();

store.subscribe(() => {
  console.log("Store Changed!!");
});

//-------------dispatching projects -----------------
store.dispatch(ProjectAdded({ name: "Project 1" }));
store.dispatch(ProjectAdded({ name: "Project 2" }));
store.dispatch(ProjectAdded({ name: "Project 3" }));



//Dispatching Users
store.dispatch(UserAdded({ name: "User 1" }));
store.dispatch(UserAdded({ name: "User 2" }));
 
// Dispatching Bugs
store.dispatch(BugAdded({ description: "Bug 1 added.." }));
store.dispatch(BugAdded({ description: "Bug 2 added.." }));
store.dispatch(BugAdded({ description: "Bug 3 added.." }));
//----------------------dispatching assigned bugs to user -------------------------------
store.dispatch(BugAssignedToUser({bugId: 1, userId: 1}));
store.dispatch(BugAssignedToUser({bugId: 2, userId: 1}));

store.dispatch(BugResolved({ id: 2 }));




// console.log(store.getState());

//------------------------ filtering of bugs by writing logic in this file --------------------------------
// const unResolvedBugs = store.getState().RootEntities.entities.bugs.filter(bug => !bug.resolved)

//------------------------ filtering of bugs by importing function from bugs slice --------------------------------
const x = getUnresolvedBugs(store.getState());
// import { createStore } from 'redux';

const y = getUnresolvedBugs(store.getState());

//------------------------filtering of bugs: will return bugs assigned to users -----------------------
const bugs = getBugsByUser(2)(store.getState());
const bugs1 = getBugsByUser(1)(store.getState());
console.log(bugs);
console.log(bugs1);
console.log(x == y);

//getting the whole state of bugs
console.log(store.getState());
