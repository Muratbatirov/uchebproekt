Ext.define('MyApp.store.doxod.KashTool', {
    extend: 'Ext.data.Store',
    alias: 'store.kashtool',
    model: 'MyApp.model.tools.KashTool',
       autoLoad: {start: 0, limit: 5},
    pageSize: 5,
  
});