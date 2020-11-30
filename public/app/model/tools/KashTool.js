Ext.define('MyApp.model.tools.KashTool', {
    extend: 'MyApp.model.Base',
     entityName: 'KashTool',
     fields: [
        { name: 'id', type: 'int'},
         { name: 'mesto',type: 'string'},
         { name: 'updated_at'},
    ],

   
});