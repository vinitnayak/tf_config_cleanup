import React from 'react';
import ReactDOM from 'react-dom';
import JqxGrid from '../../deps/jqwidgets-react/react_jqxgrid.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteEmployee} from './employeeAction';

class Jqgridreport extends React.Component {
    constructor(props){
        super(props);
    }
    
    renderGrid(emps){
        if(emps.length>0){
            let source =
                {
                    datatype: "json",
                    datafields: [
                        { name: 'id', type: 'int' },
                        { name: 'first_name', type: 'string' },
                        { name: 'last_name', type: 'string' },
                        { name: 'email', type: 'string' }
                    ],
                    localdata:emps
                };

            let dataAdapter = new $.jqx.dataAdapter(source);
            
            const deleteEmployee = (id)=>{
                this.props.deleteEmployee(this.refs.myGrid.getrowdata(id)).then(() => {
                source.localdata=this.props.emps;
                this.refs.myGrid.updatebounddata();
            });
               
            }

            let columns =
                [
                    { text: 'Case Id', datafield: 'id', width: '13%' },
                    { text: 'Case Name', datafield: 'first_name', width: '20%' },
                    { text: 'Case Title',  datafield: 'last_name', cellsalign: 'left', align: 'left', width: '25%' },
                    { text: 'Email', datafield: 'email', align: 'left', cellsalign: 'left', width: '25%' },
                    { text: '          ', datafield: 'Delete', columntype: 'button', cellsrenderer: function () {
                     return "Delete";
                    }, buttonclick: function (rowdata) {
                        deleteEmployee(rowdata);
                    }
                    }
                ];
            return (
                <JqxGrid ref='myGrid'
                    width={'100%'} source={dataAdapter} pageable={true}
                    sortable={true} altrows={true} enabletooltips={true}
                    autoheight={true} editable={true} columns={columns}
                    selectionmode={'multiplecellsadvanced'}
                />
            );
        }else{
            return (<div>Loading...</div>)
        }
    }
    render() {
        return (<div>
        {this.renderGrid(this.props.emps)}
        </div>)
    }
}
function mapStateToProps(state) {
  return {
    emps: state.emps
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteEmployee}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps, null, { withRef: true })(Jqgridreport);