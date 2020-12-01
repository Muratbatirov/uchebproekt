Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
       'MyApp.util.Util',
        
    ],

    onTextFieldSpecialKey: function(field, e, options){
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },

  

    onButtonClickCancel: function(button, e, options){
        this.lookupReference('form').reset();
    },

    onButtonClickSubmit: function(button, e, options){
        var me = this;

        if (me.lookupReference('form').isValid()){
           me.doLogin();
        }
    },

    doLogin: function() {

        var me = this,
            form = me.lookupReference('form');

        me.getView().mask('Authenticating... Please wait...');

        form.submit({
            clientValidation: true,
            url: 'register',
            scope: me,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'
        });
    },

    onLoginFailure: function(form, action) {

        //this.getView().unmask();

        
     
    },

    onLoginSuccess: function(form, action) {
       localStorage.setItem("token", action.result.token);
        var view = this.getView();
        view.unmask();
        view.close();
     MyApp.app.getController('Menu').redirectTo('balans');

        
    }
});