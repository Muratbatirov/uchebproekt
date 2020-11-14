Ext.define('MyApp.view.rasxod.RasxodCat', {
    extend: 'MyApp.view.rasxod.BaseGridRas',
    xtype: 'rasxodgridcat',
 title: 'Расход',
    store: {
        type: 'rasxod'},
       viewModel: {
        type: 'rasxod'
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