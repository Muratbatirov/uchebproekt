/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onBreadChange: function(view){
         var me = this,

        viewModel = me.getViewModel();
         
        viewModel.set('selectedView', view.getSelection());
    },
    //  getStatus: function() {
    //    var me = this,
    //     viewModel = me.getViewModel(),
    //         selectedView = viewModel.get('selectedView'),
    //         selection = me.preFilterSelection;
    //         console.log('aaa');
    //          if (!selectedView && selection) {
    //         viewModel.set('selectedView', selection);
    //     }
    // },
 //    changeselect:function(node, record, item){
 //        //var breadcrumb= view.up('mainview').down('navigation-toolbar');
 //        console.log(this);
 //        var view = this.getReferences()['navigation-toolbar'];
 //         var view2 = this.getReferences()['mainmenu'];
 //        console.log(view.getStore());
 //    var rec =  view2.getRootNode().findChild('text',record[0].data.text,true);
 // console.log(rec);
 // view.setSelection(rec);
 //    },
      getStatus: function(view, record, item, index, event, options){

          var me = this;
          var storebread = Ext.data.StoreManager.lookup('breadtwo');
         
         storebread.load(function(records, op, success){
         
             
              var menu = Ext.create('MyApp.view.Breadcrumb',{
                   cls: 'button-text',
                    height: 48,
                   
                   
                 });
             
               
           
               
               var conPanel = view.up('mainview').down('contentPanel');
               conPanel.addDocked(menu);
         });
    },
});
