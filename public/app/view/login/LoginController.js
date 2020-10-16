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

    onTextFieldKeyPress: function(field, e, options){

        var charCode = e.getCharCode(),
            me = this;

        if((e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)){

            if(me.capslockTooltip === undefined){
                me.capslockTooltip = Ext.widget('capslocktooltip');
            }

            me.capslockTooltip.show();

        } else {

            if(me.capslockTooltip !== undefined){
                me.capslockTooltip.hide();
            }
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
        var view = this.getView();
        view.unmask();
        view.close();
        var panel =  Ext.ComponentQuery.query('mainoblojka');
        var treepanel =  Ext.create('MyApp.view.menyu.Panel');
       var contentpanel =  Ext.create('MyApp.view.ContentPanel');
       var headeruser =  Ext.create('MyApp.view.HeaderUser');
        
         panel[0].remove('contentoblojka');
          panel[0].remove('appHeader');
          panel[0].add(headeruser);
         panel[0].add(treepanel);
         panel[0].add(contentpanel);

        
    }
});