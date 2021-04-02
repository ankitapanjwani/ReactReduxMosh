// ------------------------   createstore from REDUX --------------------------

// import { createStore } from "redux";
// import reducer from './projects';
// import { devToolsEnhancer } from "redux-devtools-extension";

// ---------------- Inbuilt  function for creating Store-configureStore() from REDUX Toolkit which includes devtoolsenhancer purpose also----------
import {configureStore} from "@reduxjs/toolkit";


//---------------------------importing combineReducers--------------------------
// import reducer from './reducer';
import reducer from './RootEntities';
import logger from './middleware/logger';

// --------------------------- exporting Store using Createstore --------------------------------------

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default function configureStore(){

//   const store = createStore(
//     reducer,
//     devToolsEnhancer({
//       trace: true,
//     })
//   );
//   return store;
// };

// -------------------------- exporting Store  using Configurestore by Redux Toolkit  ----------------------
export default function () {
  return configureStore(
    {
      reducer,
      middleware: [logger('console')]
    }
    );
}
