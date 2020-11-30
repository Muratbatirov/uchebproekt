Ext.define('MyApp.store.doxod.RasCatTool', {
    extend: 'Ext.data.Store',
    alias: 'store.rascattool',
    model: 'MyApp.model.tools.RasCatTool',
       autoLoad: {start: 0, limit: 5},
    pageSize: 5,
  
});