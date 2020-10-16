/**
 * The main application controller. This is a good place to handle things like routes.
 */
Ext.define('MyApp.controller.Root', {
    extend: 'Ext.app.Controller',
     

     
       refs: [
         {
            ref: 'main',
            selector: '[xtype=mainmenu]'
        },{
            ref: 'mainPanel',
            selector: 'mainoblojka'
        },
        {
            ref: 'conPanel',   
            selector: 'contentPanel'
        },
        {
            ref: 'banPanel',   
            selector: 'balansPanel'
        }
        ],
       
  
    stores: [
        'balans.Balans',
        
    ],

   

     routes : {
         'glavnaya':{
                action: 'onRoot',
          },
    
          'home':{
                action: 'onHome',
          },
          'tools' : {
            action: 'onActionTool',
           
        },
        'balans' : {
            action: 'onActionBalans',
           
        },

       
         'doxod/dobavit' : {
            action: 'onActionDobavit',
           
        },
        'doxod/categorii/:id' : {
            action: 'onAction',
           
        },
    },
    onRoot: function(){
    if(!this.getMainPanel().getViewModel().get('login')){
 this.redirectTo('home');
      }
    
   },

   onHome: function(){
    this.userstate();
    
   },
    
    onActionDobavit: function(){
      if(!this.getMainPanel().getViewModel().get('click')){
  this.userstate();
      }
      
           var conPanel =   this.getConPanel();
        var grid = Ext.create('MyApp.view.doxod.Doxod',{
                     frame: true,
                   columnWidth: 0.5,
                 });
          var gridchart = Ext.create('MyApp.view.charts.Chartpanel',{
                     frame: true,
                   columnWidth: 0.5,
                   margin: "0 10 0 5",
                 });
       
        
        grid.getStore().getProxy().setExtraParams({
    'param':false
    });
         Ext.suspendLayouts();
       conPanel.removeAll(true);
    
       conPanel.add(grid);
       conPanel.add(gridchart);
       Ext.resumeLayouts(true);
   var mainPanel = this.getMainPanel();

    mainPanel.getViewModel().set('click', false);
    },
    onActionBalans: function(){
       if(!this.getMainPanel().getViewModel().get('click')){
  this.userstate();
      }
    var conPanel =   this.getConPanel();
    conPanel.removeAll(true);
          var panel = Ext.create('Ext.panel.Panel',{
                      layout: 'column',
           header:{
            hidden:true
           },
        
                   columnWidth: 1,
                     
                 });
          var panelchart = Ext.create('MyApp.view.charts.BalansChartpanel',{
                      layout: 'column',
           
        
                   columnWidth: 1,
                     
                 });
        var storebalans =  Ext.data.StoreManager.lookup('balans');
          storebalans.load(function(records, op, success){
            var massiv = {};
             var massivchart = [];

                var store = Ext.create('Ext.data.Store',{
                 });
                 var storechart = Ext.create('Ext.data.Store',{
                 });
              Ext.each(records, function(record){
                massiv[record.data['mesto']] = record.data['summa']
                    


              });
              Ext.each(records, function(record){
                massivchart.push({
                         text:[record.data['mesto']],
                         summa:[record.data['summa']],
                })

              });
               storechart.setData(massivchart);
              console.log(massiv);
              var columns = [];
   for (var key in massiv) {
        var column = {
            xtype: 'gridcolumn',
            dataIndex: key,
            text: key,
            flex: 1,
            sortable: false,
            align: 'center',
           
        }
        columns.push(column);
    };
    store.setData([massiv]);
     panel.add({
                xtype: 'grid',
               columnWidth: 1,
                store:store,
                columns:columns,
            });
     panel.add({
        xtype: 'polar',
        columnWidth: 0.4,
              frame:true,
         margin: "15 10 0 10",
        width: '100%',
        height: 400,
        innerPadding: 20,
        store: storechart,
        legend: {
            docked: 'bottom'
        },
        interactions: ['rotate', 'itemhighlight'],
        series: [{
            type: 'pie',
           xField: 'summa',
            donut: 50,
            label: {
                field: 'text',
                display: 'outside'
            },
            highlight: true,
            
        }]});

        
          });

conPanel.add(panel);conPanel.add(panelchart);
  var mainPanel = this.getMainPanel();

    mainPanel.getViewModel().set('click', false);
    },
     onActionTool: function(){
       if(!this.getMainPanel().getViewModel().get('click')){
  this.userstate();
      }
       var conPanel =   this.getConPanel();
        conPanel.removeAll(true);
        var grid = Ext.create('MyApp.view.tools.ToolGrid',{
                     frame: true,
                      columnWidth: 0.5,
                   margin: "0 10 0 5",
                 });
        var gridras = Ext.create('MyApp.view.tools.ToolGridRas',{
                     frame: true,
                      columnWidth: 0.5,
                       margin: "0 10 0 5",
                 });
        var gridkash = Ext.create('MyApp.view.tools.ToolGridKash',{
                     frame: true,
                      columnWidth: 0.5,
                       margin: "10 10 0 5",
                 });
        
        
       
    
       conPanel.add(grid);
       conPanel.add(gridras);
       conPanel.add(gridkash);
  var mainPanel = this.getMainPanel();

    mainPanel.getViewModel().set('click', false);

    },




     onAction : function(id) {
 if(!this.getMainPanel().getViewModel().get('click')){
  this.userstate();
      }
    var decod =  decodeURI(id);
    
 
        var conPanel =   this.getConPanel();
        conPanel.removeAll(true);
        var grid = Ext.create('MyApp.view.doxod.DoxodCat',{
                     frame: true,
                   columnWidth: 0.5,
                 });
          grid.getStore().getProxy().setExtraParams({
    'param':decod,
    'param2':'value 2'
    });
       
       
     grid.getViewModel().set('doxodroute', decod);
       conPanel.add(grid);
         var mainPanel = this.getMainPanel();

    mainPanel.getViewModel().set('click', false);
      
    },
    userstate: function(){
            var panel =   Ext.ComponentQuery.query('mainoblojka');
        var treepanel =  Ext.create('MyApp.view.menyu.Panel');
       var contentpanel =  Ext.create('MyApp.view.ContentPanel');
       var headeruser =  Ext.create('MyApp.view.HeaderUser');
          Ext.suspendLayouts();
         panel[0].remove('contentoblojka');
          panel[0].down('appHeader').destroy();
          panel[0].add(headeruser);
         panel[0].add(treepanel);
         panel[0].add(contentpanel);
  Ext.resumeLayouts(true);
    }

    
});
