

//--------------------writing the logger function without using Currying
// const logger = (store,next,action) => {

// }

//--------------------writing the logger function using "Currying pattern"

const logger = param => store => next => action =>{
    console.log("Logging...",param);
    // console.log("next", next);
    // console.log("action",action);
    next(action);
}

export default logger;