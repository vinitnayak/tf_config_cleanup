import React from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'reactstrap';
import JqxGrid from '../../deps/jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../deps/jqwidgets-react/react_jqxbuttons.js';
import JqxButtonGroup from '../../deps/jqwidgets-react/react_jqxbuttongroup.js';
import { RN_FILTER_PAYROLL_DATA } from '../../base/constants/RenderNames';
import PeriodicPayrollRecordForm from './PeriodicPayrollRecordForm';
class AuthTaxTypeTotalGrid extends React.Component {
    constructor(props) {
        super(props);
        let data = this.props.periodicdata;
        let source =
            {
                datatype: "json",
                datafields: [
                    { name: 'id', type: 'int' },
                    { name: 'companyname', type: 'string' },
                    { name: 'checkdate', type: 'date' },
                    { name: 'payrolldate', type: 'date' },
                    { name: 'payrollname', type: 'string' },
                    { name: 'taxcode', type: 'string' },
                    { name: 'authname', type: 'string' },
                    { name: 'taxname', type: 'string' },
                    { name: 'rescode', type: 'string' },
                    { name: 'payrollsource', type: 'string' },
                    { name: 'grosswages', type: 'float' },
                    { name: 'taxablegrosswages', type: 'float' },
                    { name: 'taxableamount', type: 'float' },
                    { name: 'taxamount', type: 'float' },
                    { name: 'status', type: 'string' }
                ],
                localdata: data

            };
        this.state = {
            source: source
        };
    }
    goToFilterPage() {
        renderApplication(appAnchor(), RN_FILTER_PAYROLL_DATA);
    }
    componentDidMount() {
        this.refs.resetBtn.on('click', (event) => {
            this.refs.authTaxTypeTotalGrid.clearselection();
            var periodicdata = {};
            this.props.actions.testaction(periodicdata);
        });
        this.refs.selectAllBtn.on('click', (event) => {
            this.refs.authTaxTypeTotalGrid.selectallrows();
        });
        this.refs.myButtonGroup.on('buttonclick', (event) => {
            let clickedButton = event.args.button;
            if(clickedButton[0].id==='processPost'){
                let selIndexes = this.refs.authTaxTypeTotalGrid.getselectedrowindexes();
                if(selIndexes.length >0){
                    selIndexes.forEach(index => {
                        let data = this.refs.authTaxTypeTotalGrid.getrowdata(index);
                        alert('Selected for Post : '+ Object.values(data));
                    });
                }else{
                    alert('Please select at least one payroll record.');
                }
            }else if(clickedButton[0].id==='processDelete'){
                let selIndexes = this.refs.authTaxTypeTotalGrid.getselectedrowindexes();
                if(selIndexes.length >0){
                    selIndexes.forEach(index => {
                        let data = this.refs.authTaxTypeTotalGrid.getrowdata(index);
                        alert('Selected for Delete : '+ Object.values(data));
                    });
                }else{
                    alert('Please select at least one payroll record.');
                }
            }else if(clickedButton[0].id==='processReceived'){
                let selIndexes = this.refs.authTaxTypeTotalGrid.getselectedrowindexes();
                if(selIndexes.length >0){
                    selIndexes.forEach(index => {
                        let data = this.refs.authTaxTypeTotalGrid.getrowdata(index);
                        alert('Selected for Mark as Received : '+ Object.values(data));
                    });
                }else{
                    alert('Please select at least one payroll record.');
                }
            }else if(clickedButton[0].id==='processMigrated'){
                let selIndexes = this.refs.authTaxTypeTotalGrid.getselectedrowindexes();
                if(selIndexes.length >0){
                    selIndexes.forEach(index => {
                        let data = this.refs.authTaxTypeTotalGrid.getrowdata(index);
                        alert('Selected for Mark as Migrated : '+ Object.values(data));
                    });
                }else{
                    alert('Please select at least one payroll record.');
                }
            }else if(clickedButton[0].id==='addPeriodicPayrollRec'){
                this.refs.addRecordForm.toggleAddPayrollRecordModal();
            }
        });
        this.refs.excelExport.on('click', () => {
            this.refs.authTaxTypeTotalGrid.exportdata('xls', 'PeriodicAuthorityTaxTypeTotal');
        });
        this.refs.csvExport.on('click', () => {
            this.refs.authTaxTypeTotalGrid.exportdata('csv', 'PeriodicAuthorityTaxTypeTotal');
        });
    }
    render() {
        let dataAdapter = new $.jqx.dataAdapter(this.state.source);
        let data = this.props.periodicdata;
        let columns =
            [
                { text: 'Company Name', datafield: 'companyname', width: 'auto' },
                { text: 'Check Date', datafield: 'checkdate', width: 'auto', cellsformat: 'MM-dd-yyyy' },
                { text: 'Payroll Run Date/Time', datafield: 'payrolldate', width: 'auto', cellsformat: 'MM-dd-yyyy hh:mm:00 tt' },
                { text: 'Payroll Name', datafield: 'payrollname', width: 'auto' },
                { text: 'Tax Code', datafield: 'taxcode', width: 'auto' },
                { text: 'Authority Name', datafield: 'authname', width: 'auto' },
                { text: 'Tax Name', datafield: 'taxname', width: 'auto' },
                { text: 'Resident Code', datafield: 'rescode', width: 'auto' },
                { text: 'Payroll Source', datafield: 'payrollsource', width: 'auto' },
                { text: 'Gross Wages', datafield: 'grosswages', align: 'right', cellsalign: 'right', width: 'auto', cellsformat: 'c2' },
                { text: 'Taxable Gross Wages', datafield: 'taxablegrosswages', align: 'right', cellsalign: 'right', width: 'auto', cellsformat: 'c2' },
                { text: 'Taxable Amount', datafield: 'taxableamount', align: 'right', cellsalign: 'right', width: 'auto', cellsformat: 'c2' },
                { text: 'Tax Amount', datafield: 'taxamount', align: 'right', cellsalign: 'right', width: 'auto', cellsformat: 'c2' },
                { text: 'Status', datafield: 'status', align: 'left', cellsalign: 'left', width: 'auto' }
            ];
        let buttonStyle =
            {
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 16,
                paddingRight: 16
            }
        return (
            <div>
                <h1><a href="#" onClick={() => this.goToFilterPage()}><i class="fas fa-filter fa-xs" title="Filter Payroll Data"></i></a> Maintain Payroll Data</h1>
                <Alert color="primary">
                    {data.filterlabel}
                </Alert>
                <div>
                    <div style={{ float: 'left', marginBottom: 20 }}>
                        <JqxButton id="selectAllBtnId" ref='selectAllBtn' width={140} height={40} value="<span style='font-size:1rem;font-weight:400;'>Select All</span>" template={'success'}/>
                    </div>
                    <div style={{ float: 'left', marginLeft: 10 }}>
                        <JqxButton  id="resetBtnId" ref='resetBtn' width={140} height={40} value="<span style='font-size:1rem;font-weight:400;'>Reset</span>" template={'success'}/>
                    </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <JqxButtonGroup id="myButtonGroupId" ref='myButtonGroup' mode={'radio'} template={'success'} className="float-right">
                        <button id='processPost' style={buttonStyle} value="<span style='font-size:1rem;font-weight:400;'> Process Post</span>" />
                        <button id='processDelete' style={buttonStyle} value="<span style='font-size:1rem;font-weight:400;'> Process Delete</span>" />
                        <button id='processReceived' style={buttonStyle} value="<span style='font-size:1rem;font-weight:400;'>Mark as Received</span>" />
                        <button id='processMigrated' style={buttonStyle} value="<span style='font-size:1rem;font-weight:400;'>Mark as Migrated</span>" />
                        <button id='addPeriodicPayrollRec' style={buttonStyle} value="<span style='font-size:1rem;font-weight:400;'>Add Payroll Record</span>" />
                    </JqxButtonGroup>
                </div>
                <PeriodicPayrollRecordForm ref='addRecordForm'/>
                <JqxGrid ref='authTaxTypeTotalGrid'
                    width={'100%'} source={dataAdapter} pageable={true}
                    sortable={false} altrows={true} enabletooltips={false}
                    autoheight={true} editable={false} columns={columns}
                    columnsresize={true} selectionmode={'multiplerowsextended'}/>
                <div style={{ marginTop: 20 }}>
                    <div style={{ float: 'left' }}>
                        <JqxButton id="excelExportId" ref='excelExport' width={145} height={40} value="<i class='fas fa-file-excel fa-sm'></i><span style='font-size:1rem;font-weight:400;'> Export to Excel</span>" template={'success'}/>
                    </div>
                    <div style={{ float: 'left', marginLeft: 10 }}>
                        <JqxButton id="csvExportId" ref='csvExport' width={145} height={40} value="<i class='fas fa-file-code fa-sm'></i><span style='font-size:1rem;font-weight:400;'> Export to CSV<span>" template={'success'}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default AuthTaxTypeTotalGrid;