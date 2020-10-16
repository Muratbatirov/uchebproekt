/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
 
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',

    quickTips: false,
    defaultToken: 'glavnaya',
init:function(){


 Ext.create('MyApp.store.menu.Breadstore', {
            storeId: 'breadd'});
  Ext.create('MyApp.store.menu.Breadstoretwo', {
            storeId: 'breadtwo'});
  
   
   
},

    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
controllers: [
 'Root',
 'Menu',
 'Doxod'
],

  
});
