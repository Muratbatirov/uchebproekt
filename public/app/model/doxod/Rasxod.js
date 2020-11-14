Ext.define('MyApp.model.doxod.Rasxod', {
    extend: 'MyApp.model.doxod.Base',

    entityName: 'Rasxod',

    fields: [
        { name: 'categorya',
        type: 'string'},
        { name: 'summa',
         type: 'int'},
        { name: 'mesto',
        type: 'string' },

       
        
        
    ],

  validators: {
        categorya: [
            { type: 'presence', message: 'This field is mandatory'},
            { type: 'length', min: 2, max: 45}
        ],
        summa: [
            { type: 'presence', message: 'This field is mandatory'},
            { type: 'length', min: 2, max: 45}
        ],

        mesto: [
            { type: 'presence', message: 'This field is mandatory'},
            { type: 'length', min: 2, max: 45}
        ]
    },

});