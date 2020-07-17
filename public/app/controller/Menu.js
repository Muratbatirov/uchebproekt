Ext.define('MyApp.controller.Menu', {
    extend: 'Ext.app.Controller',
stores: [
        'menu.Doxodstore',
        'menu.Rasxodstore'
    ],
   renderDynamicMenu: function(view, options) {

    console.log(this.stores);

        view.body.mask('Loading Menus... Please wait...');
        var menu = Ext.create('MyApp.view.menyu.Tree',{
                    title: 'titll',
                   
                 });
        var nodes = {{text:'doxod',children:[]},{text:'rasxod',children:[]}};
        this.getStore('menu.Doxodstore').load(function(records, op, success){
             
            
              

                 

                 
                   
                var treeNodeStore = records;
                 
                     

                 for (var i=0; i<treeNodeStore.length; i++){
                     item = treeNodeStore[i].data;

                   nodes[0]['children'].push({
                         text: item['name'],
                         
                         iconCls:'fa fa-shopping-cart fa-lg'
                        
                     });
                 }
                 });
        this.getStore('menu.Rasxodstore').load(function(records, op, success){
             
            
              



                 
                   
                var treeNodeStore = records;
                 
                     

                 for (var i=0; i<treeNodeStore.length; i++){
                     item = treeNodeStore[i].data;

                   nodes[1]['children'].push({
                         text: item['name'],
                         
                         iconCls:'fa fa-shopping-cart fa-lg'
                        
                     });
                 }
                 });
        console.log(nodes);
             menu.getRootNode().appendChild(nodes);
          
             view.add(menu);
             view.body.unmask();
            
        
    },

   

     init: function(application) {

        this.control({
             "mainmenu": {
                 render: this.renderDynamicMenu
             }
         });
     }
});
