import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JqxChart from '../../deps/jqwidgets-react/react_jqxchart.js';
import JqxButton from '../../deps/jqwidgets-react/react_jqxbuttons.js';
class MonthlyPaymentChartComponent extends Component {
    render(){
        let mothlyChartData = this.props.monthlychartdata;
        let padding = { left: 5, top: 5, right: 5, bottom: 5 };
        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
        let xAxis =
            {
                dataField: 'Month',
                showGridLines: true
            };
        let seriesGroups =
            [
                {
                    type: 'column',
                    columnsGapPercent: 50,
                    seriesGapPercent: 0,
                    valueAxis:
                    {
                        unitInterval: 500,
                        minValue: 0,
                        maxValue: 5000,
                        displayValueAxis: true,
                        description: 'Payment in thousands',
                        axisSize: 'auto',
                        tickMarksColor: '#888888'
                    },
                    series: [
                        { dataField: 'Keith', displayText: 'Keith' },
                        { dataField: 'Erica', displayText: 'Erica' },
                        { dataField: 'George', displayText: 'George' }
                    ]
                }
            ];
        return (
            <div className="cBox boxTools col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1"> 
            <h1>Monthly Payments</h1>  
            <JqxChart style={{ width: 850, height: 500 }} className='monthlyChart'
                title={'Monthly Payment to users'} description={'Payment received by each user in perticular month'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={mothlyChartData} xAxis={xAxis}
                colorScheme={'scheme01'} seriesGroups={seriesGroups}
            />
            <JqxButton style={{ float: 'left' }} ref='printBtn' value='Print' width={80} />
            </div>
        )
    }
    componentDidMount() {
        this.refs.printBtn.on('click', () => {
            let content = window.document.getElementsByClassName('monthlyChart')[0].outerHTML;
            let newWindow = window.open('', '', 'width=800, height=500'),
                document = newWindow.document.open(),
                pageContent =
                    '<!DOCTYPE html>' +
                    '<html>' +
                    '<head>' +
                    '<meta charset="utf-8" />' +
                    '<title>Monthly Payment to users</title>' +
                    '</head>' +
                    '<body>' + content + '</body></html>';
            try {
                document.write(pageContent);
                document.close();
                newWindow.print();
                newWindow.close();
            }
            catch (error) {
            }
        });
    }
}
export default MonthlyPaymentChartComponent;