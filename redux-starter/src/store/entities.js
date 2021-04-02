import { combineReducers } from 'redux';
//two slices bugs and projects
import bugsReducer from './bugs';
import projectsReducer from './projects';
import usersReducer from './users';

export default combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer,
    users: usersReducer
})