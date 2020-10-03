Ext.define('MyApp.store.menu.Rasxodstore', {
    extend: 'Ext.data.TreeStore',
    
    storeId: 'rasxod',
    model: 'MyApp.model.menu.Treerasxod',
   
    
    

  root: {
        text: 'Peop',
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