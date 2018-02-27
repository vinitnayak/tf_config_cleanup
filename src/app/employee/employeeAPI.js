import * as svcs from '../../base/constants/ServiceUrls';

class employeeAPI {
  static getAllEmployee(apiUrl) {
   
    var svcs_url = `${apiUrl}${svcs.EMPLOYEES_URL}`;
    return fetch(svcs_url).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static deleteEmployee(emp,apiUrl) {
    var svcs_url = `${apiUrl}${svcs.EMPLOYEES_URL}${emp.id}`;
    return fetch(svcs_url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
  }
  static saveEmployee(values,apiUrl) {
    var svcs_url = `${apiUrl}${svcs.EMPLOYEES_URL}`;
    return fetch(svcs_url, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
  }
}
export default employeeAPI;