/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
  Ext.require('Ext.app.*');
 Ext.require('Ext.layout.*');
Ext.require('Ext.chart.*');
Ext.require('Ext.data.*');
Ext.require('MyApp.view.main.Mainoblojka');
Ext.require('Ext.ux.*');
Ext.require('Ext.grid.*');
Ext.require('Ext.panel.*');

Ext.require('Ext.grid.*');
Ext.require('Ext.form.field.Tag'); 
Ext.require('Ext.window.*');


Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',

    quickTips: false,
    requires: [
 'MyApp.overrides.chart.ChartOveride'
],
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
 'Doxod',
 'Rasxod'
],

  
});
