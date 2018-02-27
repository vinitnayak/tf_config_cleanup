import React from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CompanyTotalGrid from './CompanyTotalGrid'
import {testaction}  from './periodicAction';

class PeriodicCompanyTotal extends React.Component {
    renderGrid(periodicdata){
        if(periodicdata && periodicdata.companytotaldata && periodicdata.companytotaldata.length >0){
            return(<CompanyTotalGrid periodicdata={this.props.periodicdata} actions={this.props.actions}/>);
        }else {
            return(<div>
                <Alert color="primary">
                    Loading...
                </Alert>
                </div>
            );
        };
    }
    render() {
        return (<div>{this.renderGrid(this.props.periodicdata)}</div>);
    }
};
function mapStateToProps(state) {
    return {
        periodicdata: state.periodicdata
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ testaction }, dispatch) }
 }
export default connect(mapStateToProps,mapDispatchToProps, null, { withRef: true })(PeriodicCompanyTotal);