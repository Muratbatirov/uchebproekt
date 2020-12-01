Ext.define('MyApp.view.Contentoblojkaus', {
    extend: 'Ext.panel.Panel',
     
      extend: 'Ext.panel.Panel',
    xtype: 'contentoblojkaus',
    id: 'contentoblojka',
    scrollable: true,
     layout: 'hbox',
     cls: 'fonimage',
    region: 'center',
      header:{
        hidden:true
      },

items: [
            {
                
               xtype: 'button',
            text: 'Начать',
            width: 150,
              margin: '250 0 0 250',
             handler: function() {
         MyApp.app.getController('Menu').redirectTo('balans');
          
}
               
               
            },
          

            
        ]
        
   
});
