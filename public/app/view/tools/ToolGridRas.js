Ext.define('MyApp.view.tools.ToolGridRas', {
    extend: 'Ext.grid.Panel', 
    xtype: 'toolgridras',
 title: 'Категории расходов',
  store: {
        type: 'rascattool'},
    columnLines: true,
    viewConfig: {
        stripeRows: true
    },

   

       selModel:{
            selType: 'cellmodel'
        },

        plugins:[
            {
                ptype: 'cellediting',
                clicksToEdit: 1,
                pluginId: 'cellplugin',
              
            },
            {
                ptype: 'gridfilters'
            }
        ],

        dockedItems:[
            {
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                
               
            },{
                xtype: 'toolbar',
                dock: 'top',
                itemId: 'topToolsbar',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'tooladdras',
                        text: 'Добавить',
                        
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'toolsaveras',
                        text: 'Сохранить',
                        
                    },
                    {
                        xtype: 'button',
                        itemId: 'toolcancelras',
                        text: 'Сбросить',
                        
                    }
                    
                    
                ]
            }
        ],

        
      initComponent: function() {
        var me = this;
 me.columns=[ {xtype: 'rownumberer'},
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
                    xtype: 'datecolumn',
                    text: 'Last Update',
                    width: 150,
                    dataIndex: 'updated_at',
                    format: 'Y-m-j H:i:s',
                    filter: true
                },
               {
                    xtype: 'widgetcolumn',
                    width: 50,
                    sortable: false,
                    menuDisabled: true,
                    widget: {
                        xtype: 'button',
                    iconCls: 'fa fa-trash-alt fa-lg',
                        tooltip: 'Delete',
                        scope: me,
                        handler: function (btn) {
                            me.fireEvent('widgetclick', me, btn);
                        }
                    }
                }
            ];
       me.getColumnIndexes=function() {
            var me = this,
                columnIndexes = [];

            Ext.Array.each(me.columns, function (column) {
                // only validate column with editor
                if (Ext.isDefined(column.getEditor())) {
                    columnIndexes.push(column.dataIndex);
                } else {
                    columnIndexes.push(undefined);
                }
            });
       
            return columnIndexes;
        };

        me.validateRow=function(record, rowIndex){

            var me = this,
                view = me.getView(),
                errors = record.validate();
           
            if (errors.isValid()) {
                return true;
            }

            var columnIndexes = me.getColumnIndexes();
                
            Ext.each(columnIndexes, function (columnIndex, col) {
                var cellErrors, cell, messages;
              
                cellErrors = errors.getByField(columnIndex);
                if (!Ext.isEmpty(cellErrors)) {
                    cell = view.getCellByPosition({row: rowIndex, column: col});
                    messages = [];
                    Ext.each(cellErrors, function (cellError) {
                        messages.push(cellError.message);
                    });

                    cell.addCls('x-form-error-msg x-form-invalid-icon x-form-invalid-icon-default');
                    // set error tooltip attribute
                    cell.set({
                        'data-errorqtip': Ext.String.format('<ul><li class="last">{0}</li></ul>',
                            messages.join('<br/>'))
                    });
                }
            });

            return false;
        };

        me.validate=function(){

            var me = this,
                isValid = true,
                view = me.getView(),
                error,
                record;

            Ext.each(view.getNodes(), function (row, col) {
               
                record = view.getRecord(row);

                isValid = (me.validateRow(record, col) && isValid);

            });

            error = isValid ? undefined : {
                title: "Invalid Records",
                message: "Please fix errors before saving."
            };

            return error;
        };
         me.callParent(arguments);
    }
 

       

       
});