import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './base/config/configureStore';

import GrdReportComponent from './app/employee/GrdReportComponent.jsx';
import EmployeeFormContainer from './app/employee/EmployeeFormContainer';
import MonthlyPaymentChartContainer from './app/payments/MonthlyPaymentChartContainer';
import FilterPayrollData from './app/payrollintg/FilterPayrollData';

import PeriodicCompanyTotal from './app/payrollintg/PeriodicCompanyTotal';
import PeriodicAuthTaxTypeTotal from './app/payrollintg/PeriodicAuthTaxTypeTotal';

import {getApiUrl} from './base/config/confAPI';
import {getAppConf} from './base/config/confAction';
import {loadEmployees} from './app/employee/employeeAction';
import {loadMonthlyChartData} from './app/payments/paymentsAction';

import * as rname from './base/constants/RenderNames';

let store = configureStore();

getApiUrl().then(appconf => {
    console.log(appconf);
    store.dispatch(getAppConf(appconf));
    store.dispatch(loadEmployees());
    store.dispatch(loadMonthlyChartData());
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
    }else if(renderName===rname.RN_MONTHLY_CHART){
        renderMonthlyPaymentsChart(elem);
    }else if(renderName===rname.RN_FILTER_PAYROLL_DATA){
        renderFilterPayrollData(elem);
    }else if(renderName===rname.RN_PERIODIC_COMPNAY_TOTAL){
        renderPeriodicCompanyTotal(elem)
    }else if(renderName===rname.RN_AUTH_TAXTYPE_TOTAL){
        renderPeriodicAuthTaxTypeTotal(elem)
    }
}
/**
 * renderPeriodicAuthTaxTypeTotal
 * @param {*} elem 
 */
function renderPeriodicAuthTaxTypeTotal(elem){
    ReactDOM.render(
        <Provider store={store}>
        <PeriodicAuthTaxTypeTotal/>
        </Provider>,
        document.getElementById(elem));
}
/**
 * renderPeriodicCompanyTotal
 * @param {*} elem 
 */
function renderPeriodicCompanyTotal(elem){
    ReactDOM.render(
        <Provider store={store}>
        <PeriodicCompanyTotal/>
        </Provider>,
        document.getElementById(elem));
}
/**
 * renderFilterPayrollData
 * @param {*} elem 
 */
function renderFilterPayrollData(elem) {
    ReactDOM.render(
        <Provider store={store}>
        <FilterPayrollData/>
        </Provider>,
        document.getElementById(elem));
}
/**
 * renderMonthlyPaymentsChart
 * @param {*} elem 
 */
function renderMonthlyPaymentsChart(elem) {
    ReactDOM.render(
        <Provider store={store}>
        <MonthlyPaymentChartContainer/>
        </Provider>,
        document.getElementById(elem));
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