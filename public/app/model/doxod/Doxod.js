Ext.define('MyApp.model.doxod.Doxod', {
    extend: 'MyApp.model.doxod.Base',

    entityName: 'Doxod',

    fields: [
        { name: 'name' },
        { name: 'user_id' },
        { name: 'doxcategor_id' },

       
        
        
    ],

    validators: {
        name: [
            { type: 'presence', message: 'This field is mandatory'},
            { type: 'length', min: 3, max: 50}
        ],
       
    },

});