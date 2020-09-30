Ext.define('MyApp.view.doxod.Doxod', {
    extend: 'MyApp.view.doxod.BaseGrid',
    xtype: 'doxodgrid',

    store: {
        type: 'doxod'},
       viewModel: {
        type: 'doxod'
    },
   
    initComponent: function() {
        var me = this;

        me.columns = [
           new Ext.grid.RowNumberer(),
            {
                text: 'Категоря',
                flex: 1,
                dataIndex: 'categorya',
                editor: {
                    allowBlank: false,
                    maxLength: 45
                },
                filter: {
                    type: 'string'
                }
            },
            {
                text: 'Сумма',
                flex: 1,
                dataIndex: 'summa',
                editor: {
                    allowBlank: false,
                    maxLength: 45
                },
              
            },
            {
                
                text: 'Место',
                dataIndex: 'mesto',
               
                            queryMode: 'local',
                editor: {
                    xtype: 'combo',
                    displayField: 'mesto',
               valueField: 'mesto',
                     bind: {
                    store: '{doxodcombo}'}}
            }
            
        ];

        me.callParent(arguments);
    }
});