Ext.define('MyApp.store.menu.Rasxodstore', {
    extend: 'Ext.data.TreeStore',
    
    storeId: 'rasxodtree',
    model: 'MyApp.model.menu.Treerasxod',
   
    
    

  root: {
        text: 'Kabinet',
        expanded: true
    },
   
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