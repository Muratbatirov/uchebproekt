Ext.define('MyApp.view.charts.RasCatChartpanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'rascatchartpanel',
 layout: 'column',
    requires: [
        'MyApp.view.charts.ChartModel',
        'MyApp.view.charts.RasCatChart',
        'MyApp.view.charts.YearPickerRas',
        
    ],

   
    
     viewModel: {
        type: 'chartmodel'
    },

   header: {
            xtype: 'header',
           
            items: [
               
                {
                    xtype: 'yearfieldras',
                    
                   
                },

            ]
        },
   
       
     
    items: [{
        xtype: 'rascatchart'
    }],

        
});