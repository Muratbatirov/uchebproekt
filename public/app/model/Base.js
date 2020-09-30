Ext.define('MyApp.model.Base', {
    extend: 'Ext.data.Model',


    schema: {
        namespace: 'Packt.model',
       
        proxy: {
            type: 'ajax',
            api :{
                read : '{entityName:lowercase}/list',
                create: '{entityName:lowercase}/create',
                update: '{entityName:lowercase}/update',
                destroy: '/{entityName:lowercase}/destroy.php'
            },
            reader: {
                type: 'json',
                rootProperty: 'data',
                 totalProperty: 'total'
            },
            writer: {
                type: 'json',
                writeAllFields: true,
                encode: true,
                rootProperty: 'data',
                allowSingle: false
            },
            
            
        }
    }
});