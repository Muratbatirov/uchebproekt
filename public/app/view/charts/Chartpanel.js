Ext.define('MyApp.view.charts.Chartpanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'chartpanel',
title: "График",
    requires: [
        'MyApp.view.charts.ChartModel',
        'MyApp.view.charts.DoxDobavitChart',
        'MyApp.view.charts.MonthPicker',
        
    ],

    layout: 'column',
    
     viewModel: {
        type: 'chartmodel'
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