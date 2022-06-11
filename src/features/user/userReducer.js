import { createAction, createReducer } from '@reduxjs/toolkit';
import { userConstants as AC_USER } from '@constants/user';
import { combineReducers } from 'redux';
import UserModels from '@models/userModels';

const actionInitialState = {
  pending: false,
  success: false,
  failed: false,
};

const listInitialState = {
  pending: false,
  success: false,
  failed: false,
  data: [],
};

const info = createReducer(actionInitialState, (builder) => {
    builder.addCase(createAction(AC_USER.SET_INFO_USER), (state, action) => {
      return {...new UserModels(action.payload)}
    })
    .addDefaultCase((state, action)=>{
      return {...state};
    })
});

export default combineReducers({
    info
  });
  