import paymentsReducer from '../../../src/app/payments/paymentsReducer'

describe('RootReducer test', () => {
    it('returns updated state on load chartdata success', () => {
        const monthlychartdata= [{
            "Month": "January",
            "Keith": 2500,
            "Erica": 3500,
            "George": 3000
          },
          {
            "Month": "February",
            "Keith": 1500,
            "Erica": 2500,
            "George": 2000
          },
          {
            "Month": "March",
            "Keith": 3000,
            "Erica": 2000,
            "George": 1500
          },
          {
            "Month": "April",
            "Keith": 3500,
            "Erica": 2500,
            "George": 4500
          },
          {
            "Month": "May",
            "Keith": 2000,
            "Erica": 2000,
            "George": 2500
          },
          {
            "Month": "June",
            "Keith": 3000,
            "Erica": 2000,
            "George": 3000
          },
          {
            "Month": "July",
            "Keith": 4750,
            "Erica": 4500,
            "George": 3000
          },
          {
            "Month": "August",
            "Keith": 3500,
            "Erica": 4500,
            "George": 3500
          },
          {
            "Month": "September",
            "Keith": 1000,
            "Erica": 2500,
            "George": 4000
          },
          {
            "Month": "October",
            "Keith": 4000,
            "Erica": 2500,
            "George": 3500
          },
          {
            "Month": "November",
            "Keith": 3000,
            "Erica": 3500,
            "George": 3000
          },
          {
            "Month": "December",
            "Keith": 1500,
            "Erica": 1500,
            "George": 2500
          }]
        expect(paymentsReducer([],{type:'LOAD_MONTHLYCHART_DATA_SUCCESS',monthlychartdata:monthlychartdata})).toHaveLength(12);
    });
});