Ext.define('MyApp.model.Base', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            
        }
    ],

    schema: {
        namespace: 'Packt.model',
       
        proxy: {
            type: 'ajax',
            api :{
                read : '{entityName:lowercase}/list',
                create: '{entityName:lowercase}/create',
                update: '{entityName:lowercase}/update',
                destroy: '{entityName:lowercase}/delete'
            },
            reader: {
                type: 'json',
                rootProperty: 'data',
                 totalProperty: 'total',
                 messageProperty: 'msg'
            },
            writer: {
                type: 'json',
                writeAllFields: true,
                encode: true,
                rootProperty: 'data',
                allowSingle: false
            },
            headers:{
                    'Accept' : 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem("token")
                         }
            
            
        }
    }
});