Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype:'mainview',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',

    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'border',
    
    items: [{
        region: 'north',
        xtype: 'appHeader'
    }, 
    {
        region: 'center',
        xtype: 'contentPanel',
       
       

    },
    {   
        region: 'west',
        xtype: 'mainmenu',
        

   }

    ],

   
});
