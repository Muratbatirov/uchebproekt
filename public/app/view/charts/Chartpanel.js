Ext.define('MyApp.view.charts.Chartpanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'chartpanel',

    requires: [
        'MyApp.view.charts.ChartModel',
        'MyApp.view.charts.DoxDobavitChart',
        'MyApp.view.charts.MonthPicker',
        
    ],

   
    
     viewModel: {
        type: 'sales-film-category'
    },

   header: {
            xtype: 'header',
           
            items: [
               
                {
                    xtype: 'monthfield',
                    
                   
                },

            ]
        },
   
       
     
    items: [{
        xtype: 'doxdobavit'
    }],

        
});