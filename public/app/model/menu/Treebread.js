Ext.define('MyApp.model.menu.Treebread', {
    extend: 'Ext.data.TreeModel',

   

    
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