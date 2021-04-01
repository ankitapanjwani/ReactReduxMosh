
// -------------------------------- Importing Custom Store ----------------------------------- 

import configureStore from './store/configureStore';
import * as actions from './store/bugs';


const store = configureStore();

store.subscribe(()=>{
    console.log("Store Changed!!")
})


// Dispatch payload
store.dispatch(actions.BugAdded({description: 'Bug 1 added..'}));
store.dispatch(actions.BugAdded({description: 'Bug 2 added..'}));
store.dispatch(actions.BugAdded({description: 'Bug 3 added..'}));
store.dispatch(actions.BugResolved({id: 2}));

console.log(store.getState());




