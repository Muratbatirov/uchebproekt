Ext.define('MyApp.store.menu.Rasxodstore', {
    extend: 'Ext.data.Store',
    
    
    model: 'MyApp.model.menu.Treerasxod',
    
    
     proxy: {
    type: 'ajax',
   
    url: 'menurasxod',
   reader: {
           
            type: 'json',
           rootProperty:'children'
            
        }
},

 
   

  
    
}); 