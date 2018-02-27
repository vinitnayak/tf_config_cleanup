import {combineReducers} from 'redux';
import employees from '../../app/employee/employeeReducer';
import { reducer as formReducer } from 'redux-form';
import confReducer from '../config/confReducer';

const rootReducer = combineReducers({
  emps:employees,
  form:formReducer,
  appconf:confReducer,
})
export default rootReducer;