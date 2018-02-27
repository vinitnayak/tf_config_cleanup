import React from 'react';

import EmployeeList from '../../../src/app/employee/EmployeeListContainer';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

 const mockStore = configureMockStore();
 
 describe('Employee rows renders correctly', () => {
  let store
  beforeEach(function() {
    store = mockStore();
  }); 

  it('renders correctly', () => {
      store = mockStore({emps: [
      { "first_name": "Test First Name",
      "last_name": "Test Last Name",
      "email": "testemail@email.com",
      "id": 1}]});
    const rendered = renderer.create(
      <Provider store={store}>
      <EmployeeList/>
      </Provider>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders Loading to test empty employees', () => {
    const rendered = renderer.create(
      <Provider store={store}>
      <EmployeeList/>
      </Provider>
    );
    expect(rendered.toJSON()).toMatchSnapshot(<div>...Loaidng</div>);
  });
});