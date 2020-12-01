Ext.define('MyApp.model.menu.Treerasxod', {
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
        },
        headers:{
                    'Accept' : 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem("token")
                         }
       
    },
   

    
});