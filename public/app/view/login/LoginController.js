Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
       'MyApp.util.Util',
        
    ],

    onTextFieldSpecialKey: function(field, e, options){
        if (e.getKey() === e.ENTER) {
            this.doRegister();
        }
    },
      onTextFieldSpecialKeyLog: function(field, e, options){
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
           me.doRegister();
        }
    },
    onButtonClickCancelLog: function(button, e, options){
        this.lookupReference('form').reset();
    },

    onButtonClickSubmitLog: function(button, e, options){
        var me = this;

        if (me.lookupReference('form').isValid()){
           me.doLogin();
        }
    },


    doRegister: function() {

        var me = this,
            form = me.lookupReference('form');

        me.getView().mask('Authenticating... Please wait...');

        form.submit({
            clientValidation: true,
            url: 'register',
            scope: me,
            success: 'onRegisterSuccess',
            failure: 'onRegisterFailure'
        });
    },

    onRegisterFailure: function(form, action) {

        this.getView().unmask();
  Ext.Msg.alert("Ошибка" , "Poprobuyte esho raz");
        
     
    },

    onRegisterSuccess: function(form, action) {
       localStorage.setItem("token", action.result.token);
        var view = this.getView();
        view.unmask();
        view.close();

    // MyApp.app.getController('Menu').redirectTo('tools');
     window.location.assign('#tools');
   
      window.location.reload();
     

        
    },
     doLogin: function() {

        var me = this,
            form = me.lookupReference('form');

        me.getView().mask('Authenticating... Please wait...');

        form.submit({
            clientValidation: true,
            url: 'login',
            scope: me,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'
        });
    },

    onLoginFailure: function(form, action) {

        this.getView().unmask();
  Ext.Msg.alert("Ошибка" , "Poprobuyte esho raz");
        
     
    },

    onLoginSuccess: function(form, action) {
       localStorage.setItem("token", action.result.token);
        var view = this.getView();
        view.unmask();
        view.close();

    // MyApp.app.getController('Menu').redirectTo('tools');
     window.location.assign('#balans');
      window.location.reload();
    

        
    }
});