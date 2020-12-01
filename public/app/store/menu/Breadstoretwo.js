Ext.define('MyApp.store.menu.Breadstoretwo', {
    extend: 'Ext.data.Store',
    
    storeId: 'breadtwo',
    //model: 'MyApp.model.menu.Treerasxod',
    autoLoad:true,
    
    


   
 proxy: {
        type: 'ajax',
       api: {
            create: 'createPersons',
            read: 'menurasxod',
            update: 'updatePersons',
            destroy: 'destroyPersons'
        },
        reader: {
            type: 'json',
            rootProperty: 'children'
        },
        headers:{
                    'Accept' : 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem("token")
                         }
       
    },
    
    
}); 