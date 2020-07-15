Ext.define('MyApp.store.Menyu', {
    extend: 'Ext.data.Store',
    storeId:'menyu',
    
   
    
    
     proxy: {
    type: 'ajax',
   
    url: 'menulist',
   reader: {
           
            type: 'json',
            rootProperity:'children'
            
        }
},

 
   

  
    
}); 