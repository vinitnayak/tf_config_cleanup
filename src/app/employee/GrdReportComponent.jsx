import React, { Component } from 'react';
import JqGridReport from './GrdReportContainer';
import {connect} from 'react-redux';
class ReportComponent extends Component {
    render(){
        return (
            <div>
            <h3 class="text-bsi">Employee List Grid</h3>
            <JqGridReport/>
            </div>
        );
    }
}
export default ReportComponent;