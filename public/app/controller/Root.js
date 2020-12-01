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
        'rasxod/dobavit' : {
            action: 'onActionDobavitRas',
           
        },
        'doxod/categorii/:id' : {
            action: 'onAction',
           
        },
          'rasxod/categorii/:id' : {
            action: 'onActionRas',
           
        },
    },
    onRoot: function(){
    var panel =   Ext.ComponentQuery.query('mainoblojka');
        panel[0].down('headeruser').destroy();
          
         panel[0].removeAll(true);
       var contentpanel =  Ext.create('MyApp.view.Contentoblojkaus');
       var footer =  Ext.create('MyApp.view.Sitefooter');
       var header =  Ext.create('MyApp.view.Header');
          
        
         
          panel[0].add(header);
          panel[0].add(footer);
        
         panel[0].add(contentpanel);
 

    
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
    onActionDobavitRas: function(){
      if(!this.getMainPanel().getViewModel().get('click')){
  this.userstate();
      }
      
           var conPanel =   this.getConPanel();
        var grid = Ext.create('MyApp.view.rasxod.Rasxod',{
                     frame: true,
                   columnWidth: 0.5,
                 });
          var gridchart = Ext.create('MyApp.view.charts.Chartpanelras',{
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
                     margin: "0 10 0 5",
                 });
         var chartpanel = Ext.create('MyApp.view.charts.DoxCatChartpanel',{
                     frame: true,
                   columnWidth: 0.5,
                     margin: "0 10 0 5",
                 });
      //   console.log(chartpanel.getViewModel().getStore('doxcatstore'));
         chartpanel.getViewModel().getStore('doxodcatstore').getProxy().setExtraParams({
    'param':decod, 'year':new Date().getFullYear()
    });
          grid.getStore().getProxy().setExtraParams({
    'param':decod,
    'param2':'value 2'
    });
       
       
     grid.getViewModel().set('doxodroute', decod);
       conPanel.add(grid);
        conPanel.add(chartpanel);
         var mainPanel = this.getMainPanel();

    mainPanel.getViewModel().set('click', false);
      
    },
      onActionRas : function(id) {
 if(!this.getMainPanel().getViewModel().get('click')){
  this.userstate();
      }
    var decod =  decodeURI(id);
    
 
        var conPanel =   this.getConPanel();
        conPanel.removeAll(true);
        var grid = Ext.create('MyApp.view.rasxod.RasxodCat',{
                     frame: true,
                   columnWidth: 0.5,
                     margin: "0 10 0 5",
                 });
         var chartpanel = Ext.create('MyApp.view.charts.RasCatChartpanel',{
                     frame: true,
                   columnWidth: 0.5,
                     margin: "0 10 0 5",
                 });
      //   console.log(chartpanel.getViewModel().getStore('doxcatstore'));
         chartpanel.getViewModel().getStore('rasxodcatstore').getProxy().setExtraParams({
    'param':decod, 'year':new Date().getFullYear()
    });
          grid.getStore().getProxy().setExtraParams({
    'param':decod,
    'param2':'value 2'
    });
       
       
     grid.getViewModel().set('doxodroute', decod);
       conPanel.add(grid);
        conPanel.add(chartpanel);
         var mainPanel = this.getMainPanel();

    mainPanel.getViewModel().set('click', false);
      
    },
      onActionBalans: function(){
         var token = localStorage.getItem("token");
         console.log(token);
         if(token ===null){
           Ext.Msg.alert("Ошибка" , "NoLogin");
           return;
         }
       if(!this.getMainPanel().getViewModel().get('click')){
  this.userstate();
      }
    var conPanel =   this.getConPanel();
    conPanel.removeAll(true);
          var panel = Ext.create('Ext.panel.Panel',{
                      layout: 'column',
                      frame:true,
                        margin: "5 10 0 10",
           header:{
            hidden:true
           },
        
                   columnWidth: 1,
                     
                 });
            var panelbalans = Ext.create('Ext.panel.Panel',{
                      layout: 'column',
                      
                        margin: "5 5 0 10",
           header:{
            hidden:true
           },
        
                   columnWidth: 1,
                     
                 });
          var panelchart = Ext.create('MyApp.view.charts.BalansChartpanel',{
                      layout: 'column',
            frame:true,
          margin: "15 10 0 10",
                   columnWidth: 0.6,
                     
                 });

        var storelinechart = panelchart.getViewModel().getStore('balanschart');
        var linechart = panelchart.down('balanschart');
        var storebalans =  Ext.data.StoreManager.lookup('balans');
          storebalans.load(function(records, op, success){
          var massivfields = [{name: 'month'}];
          var series = [];
            var massiv = {};
             var massivchart = [];
             
                var store = Ext.create('Ext.data.Store',{
                 });
                 var storechart = Ext.create('Ext.data.Store',{
                 }); 
              Ext.each(records, function(record){
                massiv[record.data['mesto']] = record.data['summa'];

             massivfields.push({name: record.data['mesto']});
           series.push(
             {
            type: 'line',
            
            xField: 'month',
            yField: record.data['mesto'],
            style: {
                lineWidth: 2
            },
            marker: {
                radius: 4,
                lineWidth: 2
            },
           
            highlight: {
                fillStyle: '#000',
                radius: 5,
                lineWidth: 2,
                strokeStyle: '#fff'
            },
          
        }

            )

              });
            
           
          storelinechart.setFields(massivfields);
          linechart.setSeries(series);
              Ext.each(records, function(record){
                massivchart.push({
                         text:[record.data['mesto']],
                         summa:[record.data['summa']],
                })

              });
               storechart.setData(massivchart);
              console.log(massiv);
             

    store.setData([massiv]);
    for(let i = 0; i <massivchart.length; i++){
panelbalans.add({
      xtype: 'panel',
       margin: "5 10 10 0",
          bodyStyle:{"background-color":"#5fa2dd"}, 
         height: 100,
           header:{
            hidden:true
           },
           iconCls: 'fa fa-briefcase fa-lg',
           columnWidth: 1/massivchart.length,
            html: `<div style="display:flex;flex-direction: column;">
            <div style="color:white;font-size: 1.5em;padding:20px 0 0 20px;">${massivchart[i].text}</div>
            <div style="color:white;font-size: 1.5em;padding:20px 0 0 20px;">${massivchart[i].summa} сум</div>
            </div>`}
  )
    }
   
     conPanel.add({
        xtype: 'polar',
        columnWidth: 0.4,
              frame:true,
         margin: "15 10 0 10",
        width: '100%',
        height: 500,
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

conPanel.add(panelbalans);conPanel.add(panelchart);
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
