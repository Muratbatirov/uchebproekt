Ext.define('MyApp.view.charts.Chartpanelras', {
    extend: 'Ext.panel.Panel',
    xtype: 'chartpanelras',
title: "График",
    requires: [
        'MyApp.view.charts.ChartModel',
        'MyApp.view.charts.RasDobavitChart',
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
        xtype: 'rasdobavit'
    }],

        
});