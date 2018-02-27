import * as types from '../../base/constants/ActionTypes'
import paymentsApi from './paymentsAPI';

export function loadMonthlyChartDataSuccess(monthlychartdata) {
    return {type:types.LOAD_MONTHLYCHART_DATA_SUCCESS, monthlychartdata};
}
export function loadMonthlyChartData() {
    return function(dispatch,getState) {
        const state = getState();
        return paymentsApi.getMonthlyChartData(state.appconf.SVCS_CONTEXT_URL).then(monthlychartdata => {
        dispatch(loadMonthlyChartDataSuccess(monthlychartdata));
        }).catch(error => {
        throw(error);
        });
    };
}