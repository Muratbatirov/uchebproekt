Ext.define('MyApp.view.main.Mainoblojka', {
    extend: 'Ext.container.Viewport',
    xtype:'mainoblojka',
    requires:[
       
        'Ext.layout.container.Border',

    ],
   
    controller: 'main',
    viewModel: 'main',

    layout: 'border',
     stateful: true,
    stateId: 'viewport',
    items: [{
        region: 'north',  
        xtype: 'appHeader'
    }, 
    {
        region: 'center',
        xtype: 'contentoblojka',
       
       

    },
    {   
        region: 'south',
        xtype: 'sitefooter',
        

   }

    ],

   
});
