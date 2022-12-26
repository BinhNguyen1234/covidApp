import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';



export default function Chart({CVData,data}){
    const options = {
        credits: {
            enabled: false
          },
        title: {
          text: `${data.Country}`
        },
        chart:{
            type: "pie",
            
        },
        colors: ['#3d8bfd', '#e35d6a'],
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}:</b> {point.y} ({point.percentage:.1f}%)<br/>',
                overflow: "allow"
              },
              showInLegend: true
            }
          },
        series: [{
            name: 'Percentage',
            colorByPoint: true,
            data: [
            {
                name: 'TotalConfirmed',
                y: CVData.TotalConfirmed
              },
              {
                name: 'TotalDeaths',
                y: CVData.TotalDeaths,
                sliced: true,
                selected: true
              }
          ]
        }
        
    ]
    }
    return <HighchartsReact highcharts={Highcharts}
    options={options}></HighchartsReact>
}