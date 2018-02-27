import React from 'react';

import EmployeeRow from '../../../src/app/employee/EmployeeRowContainer';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import enzyme,{shallow} from  'enzyme'; 
import shallowWithStore from '../../utils/shallowWithStore.jsx'
import {getAllEmployee} from '../../../src/app/employee/employeeAPI';
import * as svcs from '../../../../compliancefactory/src/base/constants/ServiceUrls';
import * as types from '../../../../compliancefactory/src/base/constants/ActionTypes';
import fetchMock from 'fetch-mock';

 const mockStore = configureMockStore();
 
 describe('Employee rows renders correctly', () => {

  let store
  beforeEach(function() {
    store = mockStore({emps:[]});
    enzyme.configure({ adapter: new Adapter() });
  }); 
  it('renders correctly', () => {
    store = mockStore({emps: [
      { "first_name": "Test First Name",
      "last_name": "Test Last Name",
      "email": "testemail@email.com",
      "id": 1}]});
    const component = renderer.create(
      <Provider store={store}>
      <EmployeeRow/>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders Loading to test empty employees', () => {
    const rendered = renderer.create(
      <Provider store={store}>
      <EmployeeRow/>
      </Provider>
    );
    expect(rendered.toJSON()).toMatchSnapshot(<tbody>
      <tbody>
        <tr>
          <td>
            Loading..
          </td>
        </tr>
      </tbody>
    </tbody>);
  });
});