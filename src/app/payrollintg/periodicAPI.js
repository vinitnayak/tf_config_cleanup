import * as svcs from '../../base/constants/ServiceUrls'
class periodicAPI {
  static getPeriodicCompanyTotalData(apiUrl) {
    var svcs_url = `${apiUrl}${svcs.COMPANYTOTAL_URL}`;
    return fetch(svcs_url).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static getPeriodicAuthTaxTypeTotalData(apiUrl) {
    var svcs_url = `${apiUrl}${svcs.AUTHTAXTYPETOTAL_URL}`;
    return fetch(svcs_url).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default periodicAPI;