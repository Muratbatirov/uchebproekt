Ext.define('MyApp.store.menu.Breadstore', {
    extend: 'Ext.data.TreeStore',
    
    storeId: 'breadd',
    //model: 'MyApp.model.menu.Treerasxod',
    autoLoad:true,
    
    

  root: {
        text: 'Peop',
        expanded: true,
        leaf:false
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