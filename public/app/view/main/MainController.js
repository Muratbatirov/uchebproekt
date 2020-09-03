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
     getStatus: function() {
       var me = this,
        viewModel = me.getViewModel(),
            selectedView = viewModel.get('selectedView'),
            selection = me.preFilterSelection;
             if (!selectedView && selection) {
            viewModel.set('selectedView', selection);
        }
    },
});
