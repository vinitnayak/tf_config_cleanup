import React from 'react';

import MonthlyPaymentChartContainer from '../../../src/app/payments/MonthlyPaymentChartContainer';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import enzyme,{shallow} from  'enzyme'; 
import shallowWithStore from '../../utils/shallowWithStore.jsx'
import {getMonthlyChartData} from '../../../src/app/payments/paymentsAPI';
import * as svcs from '../../../../compliancefactory/src/base/constants/ServiceUrls';
import * as types from '../../../../compliancefactory/src/base/constants/ActionTypes';
import fetchMock from 'fetch-mock';

 const mockStore = configureMockStore();
 
 describe('Monthly chart ', () => {

  let store
  beforeEach(function() {
    store = mockStore({monthlychartdata:[]});
    enzyme.configure({ adapter: new Adapter() });
  }); 
  it('renders Loading chart to test empty chart data', () => {
    const rendered = renderer.create(
      <Provider store={store}>
      <MonthlyPaymentChartContainer/>
      </Provider>
    );
    expect(rendered.toJSON()).toMatchSnapshot(<div className="cBox boxTools col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
        <div>
            Loading Monthly Chart
        </div>
        </div>);
    });
});