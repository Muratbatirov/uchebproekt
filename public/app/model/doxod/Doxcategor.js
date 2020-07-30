Ext.define('MyApp.model.doxod.Doxcategor', {
    extend: 'MyApp.model.doxod.Base',

    entityName: 'Doxcategor',

    fields: [
        { name: 'name' },
        { name: 'user_id' },
       
        
        
    ],

    validators: {
        name: [
            { type: 'presence', message: 'This field is mandatory'},
            { type: 'length', min: 3, max: 50}
        ],
       
    },
    hasMany: [
        {
            model: 'Doxod',
           foreignKey: 'daxcategor_id',
           name: 'items' 
        }
    ]
   
});