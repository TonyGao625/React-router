import { TEST_ACTION } from '../actions/types';

const INTIAL_STATE = { message: ''};

export default function (state = INTIAL_STATE, action) {
  switch(action.type) {
    case TEST_ACTION:
    //   return { ...state, message: action.payload.message };
    return Object.assign({},state,{
        message: action.payload.message
    })
  }


  /**
   * return the state to the reducer index.js
   */
  return state;
}