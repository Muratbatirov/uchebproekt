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
                flex: 3, },
                 {
          xtype: 'button',
            text: 'Регистрация',
           flex: 1,
            handler: function() {
             if(Ext.ComponentQuery.query('register-dialog')[0]!=undefined) {
             Ext.ComponentQuery.query('register-dialog')[0].destroy();}
        Ext.widget('register-dialog');
    }

   },
               
    {
          xtype: 'button',
            text: 'Вход',
           flex: 1,
           handler: function() {
         Ext.widget('login-dialog');
          
}
    
   }
    ]
    
    

     

      
});
