Ext.define('MyApp.model.doxod.Base', {
    extend: 'MyApp.model.Base',

     fields: [
        {
            name: 'last_update',
            type: 'date',
            dateFormat: 'Y-m-j H:i:s'
        }
    ],

   
});