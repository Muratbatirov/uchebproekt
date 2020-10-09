Ext.define('MyApp.view.charts.BalansChartpanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'chartpanel',

    requires: [
        'MyApp.view.charts.BalansChart',
        
        
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
        xtype: 'balanschart'
    }],

        
});