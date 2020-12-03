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
            Ext.Ajax.request({
     url: '/logout',
defaultHeaders : {
                    'Accept' : 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem("token")
                         },
     success: function(response, opts) {
       localStorage.removeItem('token');
       MyApp.app.getController('Menu').redirectTo('glavnaya');
        Ext.Msg.alert("Poka" , response.responseText);
         
     },

     failure: function(response, opts) {
         console.log('server-side failure with status code ' + response.status);
     }
 });
            
         
          
}
    
   }
    ]
    
    

     

      
});
