Ext.define('MyApp.store.doxod.Doxod', {
    extend: 'Ext.data.Store',
    alias: 'store.doxod',
    model: 'MyApp.model.doxod.Doxod',
   autoLoad: {start: 0, limit: 10},
    pageSize: 10,
});