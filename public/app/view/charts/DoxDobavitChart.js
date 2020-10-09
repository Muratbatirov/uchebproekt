Ext.define('MyApp.view.charts.DoxDobavitChart', {
    extend: 'Ext.chart.PolarChart',
    xtype: 'doxdobavit',

   legend: {
        docked: 'bottom'
    },
    interactions: ['rotate'],
    bind: {
                    store: '{salesFilmCategory}'},
    width: '100%',
        height: 500,
    insetPadding: 30,
    innerPadding: 20,
    series: {
        type: 'pie',
        highlight: true,
        donut: 20,
        distortion: 0.6,
        style: {
            strokeStyle: 'white',
            opacity: 0.90
        },
        label: {
            field: 'categorya',
            display: 'rotate'
        },
      
        xField: 'summa'
    }
});   