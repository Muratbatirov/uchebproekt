Ext.define('MyApp.view.doxod.DoxodCat', {
    extend: 'MyApp.view.doxod.BaseGrid',
    xtype: 'doxodgridcat',

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
               editable:false,
                     bind: {
                    store: '{doxodcombo}'}}
            }
            
        ];

        me.callParent(arguments);
    }
});