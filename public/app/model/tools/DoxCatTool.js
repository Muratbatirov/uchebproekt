Ext.define('MyApp.model.tools.DoxCatTool', {
    extend: 'MyApp.model.Base',
     entityName: 'DoxCatTool',
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