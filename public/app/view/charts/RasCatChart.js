Ext.define('MyApp.view.charts.RasCatChart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'rascatchart',
  columnWidth: 1,

  
        width: '100%',
        height: 500,
        interactions: {
            type: 'panzoom',
            zoomOnPanGesture: true
        },
        animation: {
            duration: 200
        },
      bind: {
                    store: '{rasxodcatstore}'},
        innerPadding: {
            left: 40,
            right: 40,
            top:40
        },
        captions: {
            title: 'Годовой график расходов',
          
        },
        axes: [{
            type: 'numeric',
             title: 'Сумма',
            position: 'left',
            grid: true,
             minimum: 0,
           
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