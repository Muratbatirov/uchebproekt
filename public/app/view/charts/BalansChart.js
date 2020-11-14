Ext.define('MyApp.view.charts.BalansChart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'balanschart',

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
                    store: '{balanschart}'},
                    legend: {
            type: 'sprite',
            docked: 'right'
        },
        innerPadding: {
            left: 10,
            right: 10,
            top:10
        },
        captions: {
            title: 'Годовой график изменение баланса',
            
        },
        axes: [{
            title: 'Сумма',
            type: 'numeric',
            position: 'left',
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
         
      
});   