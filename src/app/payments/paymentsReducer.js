import * as types from '../../base/constants/ActionTypes';
import initialState from '../../base/config/initialState';

export default function paymentsReducer(state = initialState.monthlychartdata,action) {
  switch(action.type) {
    case types.LOAD_MONTHLYCHART_DATA_SUCCESS:
    return Object.assign([], ...state, action.monthlychartdata)  
    default: 
      return state;
  }
}