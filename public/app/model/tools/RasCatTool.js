Ext.define('MyApp.model.tools.RasCatTool', {
    extend: 'MyApp.model.Base',
     entityName: 'RasCatTool',
     fields: [
        { name: 'id', type: 'int'},
         { name: 'categorya',type: 'string'},
        {
            name: 'last_update',
            type: 'date',
            dateFormat: 'Y-m-j H:i:s'
        }
    ],

   
});