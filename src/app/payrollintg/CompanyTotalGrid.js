import React from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'reactstrap';
import JqxGrid from '../../deps/jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../deps/jqwidgets-react/react_jqxbuttons.js';
import JqxButtonGroup from '../../deps/jqwidgets-react/react_jqxbuttongroup.js';
import { RN_FILTER_PAYROLL_DATA } from '../../base/constants/RenderNames';

class CompanyTotalGrid extends React.Component {
    constructor(props) {
        super(props);
        let data = this.props.periodicdata
        let source =
            {
                datatype: "json",
                datafields: [
                    { name: 'id', type: 'int' },
                    { name: 'companyname', type: 'string' },
                    { name: 'checkdate', type: 'date' },
                    { name: 'payrolldate', type: 'date' },
                    { name: 'payrollname', type: 'string' },
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
        this.refs.resetBtnct.on('click', (event) => {
            this.refs.companyTotalGrid.clearselection();
            var periodicdata = {};
            this.props.actions.testaction(periodicdata);
        });
        this.refs.selectAllBtnct.on('click', (event) => {
            this.refs.companyTotalGrid.selectallrows(); 

        });
        this.refs.myButtonGroupct.on('buttonclick', (event) => {
            let clickedButton = event.args.button;
            if(clickedButton[0].id==='processPostct'){
                let selIndexes = this.refs.companyTotalGrid.getselectedrowindexes();
                if(selIndexes.length >0){
                    selIndexes.forEach(index => {
                        let data = this.refs.companyTotalGrid.getrowdata(index);
                        alert('Selected for Post : '+ Object.values(data));
                    });
                }else{
                    alert('Please select at least one payroll record.');
                }
            }else if(clickedButton[0].id==='processDeletect'){
                let selIndexes = this.refs.companyTotalGrid.getselectedrowindexes();
                if(selIndexes.length >0){
                    selIndexes.forEach(index => {
                        let data = this.refs.companyTotalGrid.getrowdata(index);
                        alert('Selected for Delete : '+ Object.values(data));
                    });
                }else{
                    alert('Please select at least one payroll record.');
                }
            }
        });
        this.refs.excelExportct.on('click', () => {
            this.refs.companyTotalGrid.exportdata('xls', 'PeriodicCompanyTotal');
        });
        this.refs.csvExportct.on('click', () => {
            this.refs.companyTotalGrid.exportdata('csv', 'PeriodicCompanyTotal');
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
                        <JqxButton ref='selectAllBtnct' width={140} height={40} value="<span style='font-size:1rem;font-weight:400;'>Select All</span>" template={'success'} />
                    </div>
                    <div style={{ float: 'left', marginLeft: 10 }}>
                        <JqxButton ref='resetBtnct' width={140} height={40} value="<span style='font-size:1rem;font-weight:400;'>Reset</span>" template={'success'} />
                    </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <JqxButtonGroup ref='myButtonGroupct' mode={'radio'} template={'success'} className="float-right">
                        <button id='processPostct' style={buttonStyle} value="<span style='font-size:1rem;font-weight:400;'> Process Post</span>" />
                        <button id='processDeletect' style={buttonStyle} value="<span style='font-size:1rem;font-weight:400;'> Process Delete</span>" />
                    </JqxButtonGroup>
                </div>
                <JqxGrid ref='companyTotalGrid'
                    width={'100%'} source={dataAdapter} pageable={true}
                    sortable={false} altrows={true} enabletooltips={false}
                    autoheight={true} editable={false} columns={columns}
                    selectionmode={'multiplerowsextended'}/>

                <div style={{ marginTop: 20 }}>
                    <div style={{ float: 'left' }}>
                        <JqxButton ref='excelExportct' width={145} height={40} value="<i class='fas fa-file-excel fa-sm'></i><span style='font-size:1rem;font-weight:400;'> Export to Excel</span>" template={'success'} />
                    </div>
                    <div style={{ float: 'left', marginLeft: 10 }}>
                        <JqxButton  ref='csvExportct' width={145} height={40} value="<i class='fas fa-file-code fa-sm'></i><span style='font-size:1rem;font-weight:400;'> Export to CSV<span>" template={'success'}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default CompanyTotalGrid;