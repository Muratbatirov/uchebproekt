Ext.define('MyApp.store.menu.Rasxodstorebread', {
    extend: 'Ext.data.TreeStore',
    
    storeId: 'rasxodbread',
    model: 'MyApp.model.menu.Treebread',
   
    
    

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
        }
       
    },
    
    
}); 