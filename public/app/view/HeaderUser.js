Ext.define('MyApp.view.HeaderUser', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'headeruser',
    id: 'user-header',
    height: 50,
     region: 'north',       
    items: [ { xtype: 'component' ,
                html:"<h3>Dommoney.com</h3> ",
                flex: 2, }, 
    { xtype: 'tbfill' ,
                flex: 4, },
                
    {
          xtype: 'button',
            text: 'Выход',
           flex: 1,
           handler: function() {
         MyApp.app.getController('Menu').redirectTo('glavnaya');
          
}
    
   }
    ]
    
    

     

      
});
