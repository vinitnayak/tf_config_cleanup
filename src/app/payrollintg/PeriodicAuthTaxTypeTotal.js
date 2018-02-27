import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthTaxTypeTotalGrid from './AuthTaxTypeTotalGrid'
import {testaction}  from './periodicAction';

class PeriodicAuthTaxTypeTotal extends React.Component {
    renderGrid(periodicdata){
        if(periodicdata && periodicdata.authtaxtypetotaldata && periodicdata.authtaxtypetotaldata.length >0){
            return(<AuthTaxTypeTotalGrid periodicdata={this.props.periodicdata} actions={this.props.actions}/>);
        };
    }
    render() {
        return (<div>{this.renderGrid(this.props.periodicdata)}</div>);
    }
}
function mapStateToProps(state) {
    return {
        periodicdata: state.periodicdata
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ testaction }, dispatch) }
 }
export default connect(mapStateToProps,mapDispatchToProps, null, { withRef: true })(PeriodicAuthTaxTypeTotal);