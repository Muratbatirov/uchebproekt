Ext.define('MyApp.view.charts.DoxDobavitChart', {
    extend: 'Ext.chart.PolarChart',
    xtype: 'doxdobavit',
requires: [
 'MyApp.overrides.chart.ChartOveride'
],
  columnWidth: 1,

   legend: {
        docked: 'bottom'
    },
    interactions: ['rotate'],
    bind: {
                    store: '{doxodchartstore}'},
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