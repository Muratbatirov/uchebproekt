Ext.define('MyApp.view.charts.DoxCatChart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'doxcatchart',

   columnWidth: 1,
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
                    store: '{doxodcatstore}'},
        innerPadding: {
            left: 40,
            right: 40,
            top:40
        },
        captions: {
            title: 'Годовой график доходов',
           
        },
        axes: [{
             title: 'Сумма',
            type: 'numeric',
            position: 'left',
            minimum: 0,
            grid: true,
            
           
        }, {
            type: 'category',
              title: 'Месяц',
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