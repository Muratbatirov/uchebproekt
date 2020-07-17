Ext.define('MyApp.store.menu.Doxodstore', {
    extend: 'Ext.data.Store',
  
    
    model: 'MyApp.model.menu.Treedoxod',
    
    
     proxy: {
    type: 'ajax',
   
    url: 'menudoxod',
   reader: {
           
            type: 'json',
            rootProperty:'children'
            
        }
},

 
   

  
    
}); 