import rootReducer from '../../../src/base/config/appReducer'
import employeeReducer from '../../../src/app/employee/employeeReducer'

describe('RootReducer test', () => {
    it('returns proper initial state', () => {
      expect(rootReducer(undefined, {})).toEqual( {appconf: {}, emps: [], form: {}, importdata: [], monthlychartdata: []});
    });
    it('returns updated state on create employee success', () => {
        const emp= {id:'2', first_name:'XYZ', last_name:'PQR', email:'xyz@pqr.com'}
        const emps= [{id:'1', first_name:'TTTT', last_name:'PPPP', email:'tp@pqr.com'}]
        expect(employeeReducer(emps,{type:'CREATE_EMPLOYEE_SUCCESS',values:emp})).toHaveLength(2);
    });
    it('returns updated state on delete employee success', () => {
        const emp= {id:'2', first_name:'XYZ', last_name:'PQR', email:'xyz@pqr.com'}
        const emps= [{id:'1', first_name:'TTTT', last_name:'PPPP', email:'tp@pqr.com'},{id:'2', first_name:'XYZ', last_name:'PQR', email:'xyz@pqr.com'}]
        expect(employeeReducer(emps,{type:'DELETE_EMPLOYEE_SUCCESS',emp:emp})).toHaveLength(1);
    });
    it('returns updated state on load employee success', () => {
        const emps= [{id:'1', first_name:'TTTT', last_name:'PPPP', email:'tp@pqr.com'},
        {id:'2', first_name:'XYZ', last_name:'PQR', email:'xyz@pqr.com'}]
        expect(employeeReducer([],{type:'LOAD_EMPLOYEES_SUCCESS',emps:emps})).toHaveLength(2);
    });
});