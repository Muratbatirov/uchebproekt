Ext.define('MyApp.store.doxod.DoxCatTool', {
    extend: 'Ext.data.Store',
    alias: 'store.doxcattool',
    model: 'MyApp.model.tools.DoxCatTool',
      autoLoad: {start: 0, limit: 5},
    pageSize: 5,
  
});