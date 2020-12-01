Ext.define('MyApp.view.Header', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.appHeader',
    id: 'app-header',
    height: 50,
       region: 'north',      
    items: [ { xtype: 'component' ,
                html:"<h3>Dommoney.com</h3> ",
                flex: 2, }, 
    { xtype: 'tbfill' ,
                flex: 4, },
               
    {
          xtype: 'button',
            text: 'Вход',
           flex: 1,
           handler: function() {
         MyApp.app.getController('Menu').redirectTo('balans');
          
}
    
   }
    ]
    
    

     

      
});
