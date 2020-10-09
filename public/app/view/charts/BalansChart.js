Ext.define('MyApp.view.charts.BalansChart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'balanschart',

  
        width: 500,
        height: 500,
        interactions: {
            type: 'panzoom',
            zoomOnPanGesture: true
        },
        animation: {
            duration: 200
        },
      bind: {
                    store: '{balanschart}'},
        innerPadding: {
            left: 40,
            right: 40,
            top:40
        },
        captions: {
            title: 'Line Charts - Basic Line',
            credits: {
                text: 'Data: Browser Stats 2012\nSource: http://www.w3schools.com/',
                align: 'left'
            }
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            grid: true,
            
           
        }, {
            type: 'category',
            position: 'bottom',
            grid: true,
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'line',
            xField: 'month',
            yField: 'summa',
            style: {
                lineWidth: 2
            },
            marker: {
                radius: 4,
                lineWidth: 2
            },
            label: {
                field: 'summa',
                display: 'over'
            },
            highlight: {
                fillStyle: '#000',
                radius: 5,
                lineWidth: 2,
                strokeStyle: '#fff'
            },
          
        }],
      
});   