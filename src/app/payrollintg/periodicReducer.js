import * as types from '../../base/constants/ActionTypes';
import initialState from '../../base/config/initialState';

export default function periodicReducer(state = initialState.periodicdata,action) {
  switch(action.type) {
    case types.LOAD_PERIODIC_DATA:
      return Object.assign({}, ...state, action.periodicdata)  
    case types.PERIODIC_COMPANY_TOTAL_SUCCESS:
      return Object.assign({}, ...state, action.periodicdata)  
    case types.PERIODIC_AUTHTAXTYPE_TOTAL_SUCCESS:
      return Object.assign({}, ...state, action.periodicdata)
    case 'TESTACTION':
      console.log('Inside action...');
      return state;    
    default: 
      return state;
  }
}