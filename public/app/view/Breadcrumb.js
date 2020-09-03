Ext.define('MyApp.view.Breadcrumb', {
    extend: 'Ext.toolbar.Breadcrumb',
    xtype: 'navigation-toolbar',
    id: 'navigation-toolbar',
    reference: 'navigation-toolbar',
   
  bind: {
        selection: '{selectedView}'
    },
 
 
   
     
    // hide glyphs on the buttons (too busy)
   
   // store: 'navigation',
   
});
