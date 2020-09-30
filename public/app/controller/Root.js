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
      

       
         ':id' : {
            action: 'onAction',
           
        },
        
    },
    onHome : function() {
       
    },
     onAction : function(id) {

    var decod =  decodeURI(id);
    
    function aaaa (item) {
        console.log(item.data.categorya);
     return item.data.categorya == decod;
 }
        var conPanel =   this.getConPanel();
        conPanel.removeAll(true);
        var grid = Ext.create('MyApp.view.doxod.Doxod',{
                     header:{
                hidden: true
              },
                   
                 });
          grid.getStore().getProxy().setExtraParams({
    'param':decod,
    'param2':'value 2'
    });
       // grid.getStore().getFilters().add(aaaa);
        console.log(grid);
     grid.getViewModel().set('doxodroute', decod);
       conPanel.add(grid);
      
    },

    
});
