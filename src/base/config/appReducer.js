import {combineReducers} from 'redux';
import employees from '../../app/employee/employeeReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  emps:employees,
  form:formReducer,
})
export default rootReducer;