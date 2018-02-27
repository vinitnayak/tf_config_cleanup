import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './base/config/configureStore';

import GrdReportComponent from './app/employee/GrdReportComponent.jsx';
import EmployeeFormContainer from './app/employee/EmployeeFormContainer';

import {getApiUrl} from './base/config/confAPI';
import {getAppConf} from './base/config/confAction';
import {loadEmployees} from './app/employee/employeeAction';

import * as rname from './base/constants/RenderNames';

let store = configureStore();

getApiUrl().then(appconf => {
    console.log(appconf);
    store.dispatch(getAppConf(appconf));
    store.dispatch(loadEmployees());
}).catch(error => {
    throw (error);
});
/**
 * renderApplication 
 * master branch
 * @param {*} elem 
 * @param {*} renderName 
 */
function renderApplication(elem,renderName){
    setAppAnchor(elem);
    if(renderName===rname.RN_ADD_EMPLOYEE){
        renderAddEmployeeForm(elem);
    }else if(renderName===rname.RN_EMPLOYEE_GRID){
        renderEmployeeGrid(elem);
    }
}
var APP_ANCHOR;
function setAppAnchor(elem){
   APP_ANCHOR = elem;
}
function appAnchor(){
   return APP_ANCHOR;
 }
/**
 * renderEmployeeGrid
 * @param {*} elem 
 */
function renderEmployeeGrid(elem) {
    ReactDOM.render(<Provider store={store}>
        <GrdReportComponent/>
        </Provider>,
        document.getElementById(elem));
}
/**
 * renderAddEmployeeForm
 * @param {*} elem 
 */
function renderAddEmployeeForm(elem) {
    ReactDOM.render(
        <Provider store={store}>
        <EmployeeFormContainer/>
        </Provider>,
        document.getElementById(elem));
}

module.exports = renderApplication;
window.renderApplication = renderApplication;
module.exports=appAnchor;
window.appAnchor=appAnchor;