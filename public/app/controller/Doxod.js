Ext.define('MyApp.controller.Doxod', {
    extend: 'Ext.app.Controller',

  

    stores: [
       
    ],

    views: [
       'doxod.Doxod',
       'doxod.BaseGrid'
    ],

    init: function(application) {

        var me = this;

        me.control({
           
            'basegrid button#add': {
                click: me.onButtonClickAdd
            },
            'basegrid button#save': {
               click: me.onButtonClickSave
            },
            "basegrid": {
                         edit: me.onEdit,
                         widgetclick: me.onWidgetClick
                         },
         'basegrid button#cancel': {
                click: me.onButtonClickCancel
            },
           
        });

    },

  

    onButtonClickAdd: function (button, e, options) {
        var grid = button.up('basegrid'),
            store = grid.getStore(),
            modelName = store.getModel().getName(),
            cellEditing = grid.getPlugin('cellplugin');

        store.insert(0, Ext.create(modelName, {
           categorya: grid.getViewModel().get('doxodroute'), last_update: new Date()
        }));
      
        cellEditing.startEditByPosition({row: 0, column: 2});

    },
    onEdit: function(editor, context, options) {
 context.record.set('updated_at', new Date());
},
 onButtonClickSave: function (button, e, options) {
        var grid = button.up('basegrid'),
            store = grid.getStore();
            store.getProxy().setExtraParams({
    'param':grid.getViewModel().get('doxodroute'),
    
    });
            errors = grid.validate();

        if (errors === undefined){
            store.sync({success: function(){
                 Ext.ComponentQuery.query('doxdobavit')[0].getStore().load();
         Ext.ComponentQuery.query('doxdobavit')[0].redraw();
     }});
        } else {
            console.log(errors);
            Ext.Msg.alert(errors);
        }
          
         
            
        
    },
      onButtonClickCancel: function (button, e, options) {
        button.up('basegrid').getStore().reload();
    },
    onWidgetClick: function(grid, button){

        var store = grid.getStore(),
            rec = button.getWidgetRecord();

        store.remove(rec);
        Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
    },
 
});