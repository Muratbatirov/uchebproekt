Ext.define('MyApp.view.Breadcrumb', {
    extend: 'Ext.toolbar.Breadcrumb',
    xtype: 'navigation-toolbar',
    id: 'navigation-toolbar',
    reference: 'navigation-toolbar',
    store: 'rasxod',
  bind: {
        selection: '{selectedView}'
    },
 listeners: {
            change: 'onBreadChange' 
        }
 
   

   
});
