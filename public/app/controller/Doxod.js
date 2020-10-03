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
                         edit: me.onEdit
                         }
           
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
 context.record.set('last_update', new Date());
},
 onButtonClickSave: function (button, e, options) {
        var grid = button.up('basegrid'),
            store = grid.getStore();
            store.getProxy().setExtraParams({
    'param':grid.getViewModel().get('doxodroute'),
    
    });
            errors = grid.validate();

        if (errors === undefined){
            store.sync();
        } else {
            console.log(errors);
            Ext.Msg.alert(errors);
        }
       
          
     
            
        
    },

 
});