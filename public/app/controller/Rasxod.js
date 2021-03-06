Ext.define('MyApp.controller.Rasxod', {
    extend: 'Ext.app.Controller',

  

    stores: [
       
    ],

    views: [
       'rasxod.Rasxod',
       'rasxod.BaseGridRas'
    ],

    init: function(application) {

        var me = this;

        me.control({
           
            'basegridrasxod button#addras': {
                click: me.onButtonClickAdd
            },
            'basegridrasxod button#saveras': {
               click: me.onButtonClickSave
            },
            "basegridrasxod": {
                         edit: me.onEdit,
                          widgetclick: me.onWidgetClick
                         },
              'basegridrasxod button#cancelras': {
                click: me.onButtonClickCancel
            },
           
        });

    },

  

    onButtonClickAdd: function (button, e, options) {
        var grid = button.up('basegridrasxod'),
            store = grid.getStore(),
            modelName = store.getModel().getName(),
            cellEditing = grid.getPlugin('cellplugin');

        store.insert(0, Ext.create(modelName, {
           categorya: grid.getViewModel().get('doxodroute'), updated_at: new Date()
        }));
      
        cellEditing.startEditByPosition({row: 0, column: 2});

    },
    onEdit: function(editor, context, options) {
 context.record.set('updated_at', new Date());
},
 onButtonClickSave: function (button, e, options) {
        var grid = button.up('basegridrasxod'),
            store = grid.getStore();
            store.getProxy().setExtraParams({
    'param':grid.getViewModel().get('doxodroute'),
    
    });
            errors = grid.validate();

       
       
        if (errors === undefined){
            store.sync({success: function(){
              if(Ext.ComponentQuery.query('rasdobavit')[0] != undefined){
                 Ext.ComponentQuery.query('rasdobavit')[0].getStore().load();
         Ext.ComponentQuery.query('rasdobavit')[0].redraw();
         Ext.ComponentQuery.query('basegridrasxod')[0].getStore().reload();}else{
          Ext.ComponentQuery.query('rascatchart')[0].getStore().load();
           Ext.ComponentQuery.query('rascatchart')[0].redraw();
           Ext.ComponentQuery.query('basegridrasxod')[0].getStore().reload();

         }
     },failure: function(batch, options) {
            Ext.Msg.alert("Ошибка" , batch.getOperations()[0].error);
        }});
        } else {
            console.log(errors);
            Ext.Msg.alert(errors);
        }   
         
            
        
    },
  onButtonClickCancel: function (button, e, options) {
        button.up('basegridrasxod').getStore().reload();
    },
       onWidgetClick: function(grid, button){

        var store = grid.getStore(),
            rec = button.getWidgetRecord();

        store.remove(rec);
        Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
    },

 
});