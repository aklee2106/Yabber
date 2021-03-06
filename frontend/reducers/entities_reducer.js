import {combineReducers} from 'redux';
import usersReducer from "./users_reducer";
import conversationsReducer from './conversations_reducer';
import commentsReducer from './comments_reducer';
import groupsReducer from './groups_reducer';
import likesReducer from './likes_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer, 
  conversations: conversationsReducer, 
  comments: commentsReducer,
  groups: groupsReducer,
  likes: likesReducer
});

export default entitiesReducer;