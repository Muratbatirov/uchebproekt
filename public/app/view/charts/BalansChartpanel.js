Ext.define('MyApp.view.charts.BalansChartpanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'balanschartpanel',
title: "График",
    requires: [
        'MyApp.view.charts.BalansChart',
        'MyApp.view.charts.YearPickerbal',
        
    ],

     layout: 'column',
    
     viewModel: {
        type: 'chartmodel'
    },

   header: {
            xtype: 'header',
           
            items: [
               
                {
                    xtype: 'yearfieldbal',
                    
                   
                },

            ]
        },
   
       
     
    items: [{
        xtype: 'balanschart'
    }],

        
});