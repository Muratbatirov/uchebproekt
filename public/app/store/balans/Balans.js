Ext.define('MyApp.store.balans.Balans', {
    extend: 'Ext.data.Store',
    alias: 'store.balans',
     storeId: 'balans',
     fields: [
                {name: 'id'},
                {name: 'mesto'},
                {name: 'summa'}
            ],
            
            proxy: {
                type: 'ajax',
                url: 'balans/list',
               
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
});