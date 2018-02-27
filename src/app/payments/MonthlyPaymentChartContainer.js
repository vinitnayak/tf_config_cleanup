//import React, {PropTypes,Component} from 'react';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MonthlyPaymentChartComponent from './MonthlyPaymentChartComponent.jsx';

class MonthlyPaymentChartContainer extends Component {
    
    renderMonthlyChart(monthlychartdata){
        if(monthlychartdata && monthlychartdata.length >0){
            return(
                <MonthlyPaymentChartComponent monthlychartdata={monthlychartdata}/>
            )
        }else{
            return(<div>Loading Monthly Chart</div>);
        }
    }
    render(){
        return (
        <div className="cBox boxTools col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            {this.renderMonthlyChart(this.props.monthlychartdata)}
        </div>
        )
    }
};
MonthlyPaymentChartContainer.propTypes = {
    monthlychartdata: PropTypes.array.isRequired
};
function mapStateToProps(state) {
  return {
    monthlychartdata: state.monthlychartdata
  }
}
export default connect(mapStateToProps)(MonthlyPaymentChartContainer);