import configureMockStore from 'redux-mock-store'; // mock store 
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {getAllEmployee} from '../../../src/app/employee/employeeAPI';
import * as actions from '../../../../compliancefactory/src/app/employee/employeeAction';
import * as types from '../../../../compliancefactory/src/base/constants/ActionTypes';
import * as svcs from '../../../../compliancefactory/src/base/constants/ServiceUrls';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
 

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates LOAD_EMPLOYEES_SUCCESS when loading employees has been done', () => {
    fetchMock
      .getOnce(svcs.EMPLOYEES_URL, { body: { emps: [
        { "first_name": "Test First Name",
        "last_name": "Test Last Name",
        "email": "testemail@email.com",
        "id": 1}] }, headers: { 'content-type': 'application/json' } })


    const expectedActions =[{"emps": {emps: [
      { "first_name": "Test First Name",
      "last_name": "Test Last Name",
      "email": "testemail@email.com",
      "id": 1}]}, "type": "LOAD_EMPLOYEES_SUCCESS"}]
    
    const store = mockStore({ emps: []})
    /*return store.dispatch(actions.loadEmployees()).then(() => {
      // return of async actions
      console.log(expectedActions);
      expect(store.getActions()).toEqual(expectedActions)
      expect(store.getState()).toMatchObject({ emps: [] });
    })*/
  })
  
  it('creates CREATE_EMPLOYEE_SUCCESS when saving employee has been done', () => {
    fetchMock.postOnce(svcs.EMPLOYEES_URL, { body:[{ "first_name": "Test First Name",
    "last_name": "Test Last Name",
    "email": "testemail@email.com",
    "id": 1}], headers: { 'content-type': 'application/json' } })

    const expectedActions = [{
      type: types.CREATE_EMPLOYEE_SUCCESS,
      values:[{ "first_name": "Test First Name",
      "last_name": "Test Last Name",
      "email": "testemail@email.com",
      "id": 1}]
    }]
    const store = mockStore({ emps: [] })

    /*return store.dispatch(actions.saveEmployee({ "first_name": "Test First Name",
    "last_name": "Test Last Name",
    "email": "testemail@email.com",
    "id": 1})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })*/
  })

 it('creates DELETE_EMPLOYEE_SUCCESS when deleting employee has been done', () => {
   var emp={ "first_name": "Test First Name",
   "last_name": "Test Last Name",
   "email": "testemail@email.com",
   "id": 1};

    var url = `${svcs.EMPLOYEES_URL}${emp.id}`;

    fetchMock.deleteOnce(url, { body:[{ "first_name": "Test First Name",
    "last_name": "Test Last Name",
    "email": "testemail@email.com",
    "id": 1}], headers: { 'content-type': 'application/json' } })

    const expectedActions = [{
      type: types.DELETE_EMPLOYEE_SUCCESS,
      emp:{ "first_name": "Test First Name",
      "last_name": "Test Last Name",
      "email": "testemail@email.com",
      "id": 1}
    }]
    const store = mockStore({ emps: [] })

   /* return store.dispatch(actions.deleteEmployee(emp)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
    store.dispatch(actions.deleteEmployee(emp))
    expect(actions.deleteEmployeeSuccess(emp)).toBeCalled();*/
  })
})
 
describe('loadEmployeeSuccess', () => {
  it('should create an action to LOAD EMPLOYEES', () => {
    const emps =[]
    const expectedAction = {
      type: types.LOAD_EMPLOYEES_SUCCESS,
      emps:[]
    }
    expect(actions.loadEmployeeSuccess(emps)).toEqual(expectedAction)
  })
})

describe('createEmployeeSuccess', () => {
    it('should create an action to CREATE EMPLOYEE', () => {
      const values ={}
      const expectedAction = {
        type: types.CREATE_EMPLOYEE_SUCCESS,
        values:{}
      }
      expect(actions.createEmployeeSuccess(values)).toEqual(expectedAction)
    })
})