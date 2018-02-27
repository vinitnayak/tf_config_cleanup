import configureMockStore from 'redux-mock-store'; // mock store 
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {getMonthlyChartData} from '../../../src/app/payments/paymentsAPI';
import * as actions from '../../../../compliancefactory/src/app/payments/paymentsAction';
import * as types from '../../../../compliancefactory/src/base/constants/ActionTypes';
import * as svcs from '../../../../compliancefactory/src/base/constants/ServiceUrls';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
 

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates LOAD_MONTHLYCHART_DATA_SUCCESS when loading chartdata has been done', () => {
    fetchMock
      .getOnce(svcs.MONTHLYCHART_DATA_URL, { body: { monthlychartdata: [
        {
            "Month": "January",
            "Keith": 2500,
            "Erica": 3500,
            "George": 3000
          },
          {
            "Month": "February",
            "Keith": 1500,
            "Erica": 2500,
            "George": 2000
          },
          {
            "Month": "March",
            "Keith": 3000,
            "Erica": 2000,
            "George": 1500
          },
          {
            "Month": "April",
            "Keith": 3500,
            "Erica": 2500,
            "George": 4500
          },
          {
            "Month": "May",
            "Keith": 2000,
            "Erica": 2000,
            "George": 2500
          },
          {
            "Month": "June",
            "Keith": 3000,
            "Erica": 2000,
            "George": 3000
          },
          {
            "Month": "July",
            "Keith": 4750,
            "Erica": 4500,
            "George": 3000
          },
          {
            "Month": "August",
            "Keith": 3500,
            "Erica": 4500,
            "George": 3500
          },
          {
            "Month": "September",
            "Keith": 1000,
            "Erica": 2500,
            "George": 4000
          },
          {
            "Month": "October",
            "Keith": 4000,
            "Erica": 2500,
            "George": 3500
          },
          {
            "Month": "November",
            "Keith": 3000,
            "Erica": 3500,
            "George": 3000
          },
          {
            "Month": "December",
            "Keith": 1500,
            "Erica": 1500,
            "George": 2500
          }
        ] }, headers: { 'content-type': 'application/json' } })


    const expectedActions =[{"monthlychartdata": {monthlychartdata: [
        {
            "Month": "January",
            "Keith": 2500,
            "Erica": 3500,
            "George": 3000
          },
          {
            "Month": "February",
            "Keith": 1500,
            "Erica": 2500,
            "George": 2000
          },
          {
            "Month": "March",
            "Keith": 3000,
            "Erica": 2000,
            "George": 1500
          },
          {
            "Month": "April",
            "Keith": 3500,
            "Erica": 2500,
            "George": 4500
          },
          {
            "Month": "May",
            "Keith": 2000,
            "Erica": 2000,
            "George": 2500
          },
          {
            "Month": "June",
            "Keith": 3000,
            "Erica": 2000,
            "George": 3000
          },
          {
            "Month": "July",
            "Keith": 4750,
            "Erica": 4500,
            "George": 3000
          },
          {
            "Month": "August",
            "Keith": 3500,
            "Erica": 4500,
            "George": 3500
          },
          {
            "Month": "September",
            "Keith": 1000,
            "Erica": 2500,
            "George": 4000
          },
          {
            "Month": "October",
            "Keith": 4000,
            "Erica": 2500,
            "George": 3500
          },
          {
            "Month": "November",
            "Keith": 3000,
            "Erica": 3500,
            "George": 3000
          },
          {
            "Month": "December",
            "Keith": 1500,
            "Erica": 1500,
            "George": 2500
          }
        ]}, "type": "LOAD_MONTHLYCHART_DATA_SUCCESS"}]
    
    const store = mockStore({ monthlychartdata: [] })
    
    /*return store.dispatch(actions.loadMonthlyChartData()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
      expect(store.getState()).toMatchObject({ monthlychartdata: [] });
    })*/
  })
})
 
describe('loadMonthlyChartDataSuccess', () => {
  it('should create an action to LOAD MONTHLY CHARTDATA', () => {
    const monthlychartdata =[]
    const expectedAction = {
      type: types.LOAD_MONTHLYCHART_DATA_SUCCESS,
      monthlychartdata:[]
    }
   /* expect(actions.loadMonthlyChartDataSuccess(monthlychartdata)).toEqual(expectedAction)*/
  })
})
