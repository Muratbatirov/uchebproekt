Ext.define('MyApp.view.ContentPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',
    activeTab: 0,
    items: [
        {
            xtype: 'panel',
            closable: false,
            iconCls: 'fa fa-home fa-lg tabIcon',
            title: 'home',
            layout: 'fit'
        }
    ]

   
});
