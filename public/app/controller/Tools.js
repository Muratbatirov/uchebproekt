Ext.define('MyApp.controller.Tools', {
    extend: 'Ext.app.Controller',

  

    stores: [
       
    ],

    views: [
       'tools.ToolGrid',
        'tools.ToolGridKash',
         'tools.ToolGridRas',
    ],

    init: function(application) {

        var me = this;

        me.control({
           
            'toolgrid button#tooladd': {
                click: me.onButtonClickAdd
            },
            'toolgrid button#toolsave': {
               click: me.onButtonClickSave
            },
            "toolgrid": {
                         edit: me.onEdit,
                         widgetclick: me.onWidgetClick
                         },
         'toolgrid button#toolcancel': {
                click: me.onButtonClickCancel
            },
            'toolgridras button#tooladdras': {
                click: me.onButtonClickAddRas
            },
            'toolgridras button#toolsaveras': {
               click: me.onButtonClickSaveRas
            },
            "toolgridras": {
                         edit: me.onEditRas,
                         widgetclick: me.onWidgetClickRas
                         },
         'toolgridras button#toolcancelras': {
                click: me.onButtonClickCancelRas
            },

             'toolgridkash button#tooladdkash': {
                click: me.onButtonClickAddKash
            },
            'toolgridkash button#toolsavekash': {
               click: me.onButtonClickSaveKash
            },
            "toolgridkash": {
                         edit: me.onEditKash,
                         widgetclick: me.onWidgetClickKash
                         },
         'toolgridkash button#toolcancelkash': {
                click: me.onButtonClickCancelKash
            },
           
        });

    },

  

    onButtonClickAdd: function (button, e, options) {
        var grid = button.up('toolgrid'),
            store = grid.getStore(),
            modelName = store.getModel().getName(),
            cellEditing = grid.getPlugin('cellplugin');

        store.insert(0, Ext.create(modelName, {
         updated_at: new Date()
        }));
      
        cellEditing.startEditByPosition({row: 0, column: 2});

    },
    onEdit: function(editor, context, options) {
 context.record.set('updated_at', new Date());
},
 onButtonClickSave: function (button, e, options) {
        var grid = button.up('toolgrid'),
            store = grid.getStore();
            
            errors = grid.validate();

        if (errors === undefined){
            store.sync({success: function(){
            Ext.ComponentQuery.query('toolgrid')[0].getStore().reload();
             Ext.ComponentQuery.query('mainoblojka')[0].getViewModel().set('breadcrumb', true);
            Ext.ComponentQuery.query('mainmenu')[0].getStore().load(
               {
                callback:function(rec,oper,success){
                   
                     Ext.ComponentQuery.query('mainmenu')[0].getSelectionModel().select( Ext.ComponentQuery.query('mainmenu')[0].store.getAt(7));
                     Ext.ComponentQuery.query('mainmenu')[0].ensureVisible(
                       Ext.ComponentQuery.query('mainmenu')[0].store.getAt(7), {
                focus: true
            });
                }
               }
                );
     }});
        } else {
            console.log(errors);
            Ext.Msg.alert(errors);
        }
          
         
            
        
    },
      onButtonClickCancel: function (button, e, options) {
        button.up('toolgrid').getStore().reload();
    },
    onWidgetClick: function(grid, button){

        var store = grid.getStore(),
            rec = button.getWidgetRecord();

        store.remove(rec);
        Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
    },


     onButtonClickAddRas: function (button, e, options) {
        var grid = button.up('toolgridras'),
            store = grid.getStore(),
            modelName = store.getModel().getName(),
            cellEditing = grid.getPlugin('cellplugin');

        store.insert(0, Ext.create(modelName, {
         updated_at: new Date()
        }));
      
        cellEditing.startEditByPosition({row: 0, column: 2});

    },
    onEditRas: function(editor, context, options) {
 context.record.set('updated_at', new Date());
},
 onButtonClickSaveRas: function (button, e, options) {
        var grid = button.up('toolgridras'),
            store = grid.getStore();
            
            errors = grid.validate();

        if (errors === undefined){
            store.sync({success: function(){
                 Ext.ComponentQuery.query('toolgridras')[0].getStore().reload();
                 Ext.ComponentQuery.query('mainoblojka')[0].getViewModel().set('breadcrumb', true);
            Ext.ComponentQuery.query('mainmenu')[0].getStore().load(
               {
                callback:function(rec,oper,success){
                   
                     Ext.ComponentQuery.query('mainmenu')[0].getSelectionModel().select( Ext.ComponentQuery.query('mainmenu')[0].store.getAt(7));
                     Ext.ComponentQuery.query('mainmenu')[0].ensureVisible(
                       Ext.ComponentQuery.query('mainmenu')[0].store.getAt(7), {
                focus: true
            });
                }
               }
                );
           
          
     }});
        } else {
            console.log(errors);
            Ext.Msg.alert(errors);
        }
          
         
            
        
    },
      onButtonClickCancelRas: function (button, e, options) {
        button.up('toolgridras').getStore().reload();
    },
    onWidgetClickRas: function(grid, button){

        var store = grid.getStore(),
            rec = button.getWidgetRecord();

        store.remove(rec);
        Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
    },
 ///kashelok

   onButtonClickAddKash: function (button, e, options) {
        var grid = button.up('toolgridkash'),
            store = grid.getStore(),
            modelName = store.getModel().getName(),
            cellEditing = grid.getPlugin('cellplugin');

        store.insert(0, Ext.create(modelName, {
         updated_at: new Date()
        }));
      
        cellEditing.startEditByPosition({row: 0, column: 2});

    },
    onEditKash: function(editor, context, options) {
 context.record.set('updated_at', new Date());
},
 onButtonClickSaveKash: function (button, e, options) {
        var grid = button.up('toolgridkash'),
            store = grid.getStore();
            
            errors = grid.validate();

        if (errors === undefined){
            store.sync({success: function(){
            Ext.ComponentQuery.query('toolgridkash')[0].getStore().reload();
            
     }});
        } else {
            console.log(errors);
            Ext.Msg.alert(errors);
        }
          
         
            
        
    },
      onButtonClickCancelKash: function (button, e, options) {
        button.up('toolgridkash').getStore().reload();
    },
    onWidgetClickKash: function(grid, button){

        var store = grid.getStore(),
            rec = button.getWidgetRecord();

        store.remove(rec);
        Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
    },
});