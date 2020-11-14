Ext.define('MyApp.view.charts.DoxCatChartpanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'catchartpanel',
 layout: 'column',
    requires: [
        'MyApp.view.charts.ChartModel',
        'MyApp.view.charts.DoxCatChart',
        'MyApp.view.charts.YearPicker',
        
    ],

   
    
     viewModel: {
        type: 'chartmodel'
    },

   header: {
            xtype: 'header',
           
            items: [
               
                {
                    xtype: 'yearfield',
                    
                   
                },

            ]
        },
   
       
     
    items: [{
        xtype: 'doxcatchart'
    }],

        
});