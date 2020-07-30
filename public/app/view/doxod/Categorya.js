Ext.define('MyApp.view.doxod.Categorya', {
    extend: 'MyApp.view.doxod.BaseGrid',
    xtype: 'otchetgrid',

    store: {
        type: 'doxcategor'},

    initComponent: function() {
        var me = this;

        me.columns = [
            {
                text: 'Categorya Id',
                width: 100,
                dataIndex: 'id',
                filter: {
                    type: 'numeric'
                }
            },
            {
                text: 'Name',
                flex: 1,
                dataIndex: 'name',
                editor: {
                    allowBlank: false,
                    maxLength: 45
                },
                filter: {
                    type: 'string'
                }
            }
        ];

        me.callParent(arguments);
    }
});