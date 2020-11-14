Ext.define('MyApp.view.doxod.Doxod', {
    extend: 'MyApp.view.doxod.BaseGrid',
    xtype: 'doxodgrid',
 title: 'Доход',
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
                    xtype: 'combo',
                    displayField: 'text',
               valueField: 'text',
              editable:false,
                     bind: {
                    store: '{categcombo}'},
                    
                },
                filter: {
                    type: 'string'
                }
            },
            {
                text: 'Сумма',
                flex: 1,
                dataIndex: 'summa',
                xtype: 'numbercolumn', 
                format:'0.00' ,
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