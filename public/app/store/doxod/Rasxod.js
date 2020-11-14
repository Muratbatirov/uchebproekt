Ext.define('MyApp.store.doxod.Rasxod', {
    extend: 'Ext.data.Store',
    alias: 'store.rasxod',
    model: 'MyApp.model.doxod.Rasxod',
   autoLoad: {start: 0, limit: 10},
    pageSize: 10,
});