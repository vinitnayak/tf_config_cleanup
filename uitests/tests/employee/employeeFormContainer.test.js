import React from 'react';
import  ContactForm,{formName}  from '../../../src/app/employee/EmployeeFormContainer';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe("Employee Entry Form", () => {
  it("form name should be contact", () => {
     expect(formName).toBe('entry-form');
   });
 });
 const mockStore = configureMockStore()
 const store = mockStore()
 describe('Form component renders the form correctly renders correctly', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Provider store={store}>
      <ContactForm/>
      </Provider>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});  