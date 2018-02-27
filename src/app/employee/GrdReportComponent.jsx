import React, { Component } from 'react';
import JqGridReport from './GrdReportContainer';
import {connect} from 'react-redux';
class ReportComponent extends Component {
    render(){
        return (
            <div>
            <h1>Employee List Grid</h1>
            <JqGridReport/>
            </div>
        );
    }
}
export default ReportComponent;