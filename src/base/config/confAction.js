import * as types from '../../base/constants/ActionTypes'

export function getAppConf(appconf) {
    return function (dispatch) {
        dispatch(loadAppConfSuccess(appconf));
    };
}
export function loadAppConfSuccess(appconf) {
    return { type: types.LOAD_APPCONF_SUCCESS, appconf };
}