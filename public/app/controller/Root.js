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
            selector: 'mainpanel'
        },{
            ref: 'filmsGrid',
            selector: '[xtype=films-grid]'
        },
        {
            ref: 'conPanel',   
            selector: 'contentPanel'
        }
        ],
       
  
    

   

     routes : {
          'tools' : {
            action: 'onActionTool',
           
        },

       
         'doxod/dobavit' : {
            action: 'onActionDobavit',
           
        },
        'doxod/categorii/:id' : {
            action: 'onAction',
           
        },
    },
   
    
    onActionDobavit: function(){
       var conPanel =   this.getConPanel();
        conPanel.removeAll(true);
        var grid = Ext.create('MyApp.view.doxod.Doxod',{
                     header:{
                hidden: true
              },
                   
                 });
        
        grid.getStore().getProxy().setExtraParams({
    'param':false
    });
       
    
       conPanel.add(grid);


    },
     onActionTool: function(){
       var conPanel =   this.getConPanel();
        conPanel.removeAll(true);
        var grid = Ext.create('MyApp.view.tools.ToolGrid',{
                     header:{
                hidden: true
              },
                   
                 });
        
        
       
    
       conPanel.add(grid);


    },




     onAction : function(id) {

    var decod =  decodeURI(id);
    
 
        var conPanel =   this.getConPanel();
        conPanel.removeAll(true);
        var grid = Ext.create('MyApp.view.doxod.DoxodCat',{
                     header:{
                hidden: true
              },
                   
                 });
          grid.getStore().getProxy().setExtraParams({
    'param':decod,
    'param2':'value 2'
    });
       
       
     grid.getViewModel().set('doxodroute', decod);
       conPanel.add(grid);
      
    },

    
});
