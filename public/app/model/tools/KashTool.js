Ext.define('MyApp.model.tools.KashTool', {
    extend: 'MyApp.model.Base',
     entityName: 'KashTool',
     fields: [
        { name: 'id', type: 'int'},
         { name: 'mesto',type: 'string'},
        {
            name: 'last_update',
            type: 'date',
            dateFormat: 'Y-m-j H:i:s'
        }
    ],

   
});