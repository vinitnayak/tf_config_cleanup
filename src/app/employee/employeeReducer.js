import * as types from '../../base/constants/ActionTypes';
import initialState from '../../base/config/initialState';

export default function employeeReducer(state = initialState.emps,action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case types.LOAD_EMPLOYEES_SUCCESS:
      // return action.cats;
     // return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))
     return Object.assign([], state, action.emps)
    case types.LOAD_ALL_EMPLOYEE_SUCCESS:
      // return action.cats;
     // return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))
    return state//Object.assign([], state, action.cats)
    case types.DELETE_EMPLOYEE_SUCCESS:
      console.log('state');
      console.log(state);
      const newState = Object.assign([], state);
      const indexOfEmpToDelete = state.findIndex(emp => {
      return emp.id == action.emp.id
      })
      newState.splice(indexOfEmpToDelete, 1);
      console.log('newState');
      console.log(newState);
      return newState;
    case types.CREATE_EMPLOYEE_SUCCESS:
      console.log(action.values);
      return [
        ...state.filter(emp => emp.id !== action.values.id),
        Object.assign({}, action.values)
      ]
    default: 
      return state;
  }
}