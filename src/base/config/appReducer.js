import {combineReducers} from 'redux';
import employees from '../../app/employee/employeeReducer';
import chartdata from '../../app/payments/paymentsReducer';
import { reducer as formReducer } from 'redux-form';
import confReducer from '../config/confReducer';
import periodicReducer from '../../app/payrollintg/periodicReducer';

const rootReducer = combineReducers({
  emps:employees,
  form:formReducer,
  monthlychartdata:chartdata,
  appconf:confReducer,
  periodicdata: periodicReducer,
})
export default rootReducer;