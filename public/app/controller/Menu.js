Ext.define('MyApp.controller.Menu', {
    extend: 'Ext.app.Controller',
stores: [
        'Menyu'
    ],
   renderDynamicMenu: function(view, options) {

    

        view.body.mask('Loading Menus... Please wait...');
     
        this.getMenyuStore().load(function(records, op, success){
             
            

                var menu = Ext.create('MyApp.view.menyu.Tree',{
                    title: 'titll',
                   
                });
                   
                var treeNodeStore = records,
                    nodes = [],
                    item;

                for (var i=0; i<treeNodeStore.length; i++){
                    item = treeNodeStore[i].data;

                   nodes.push({
                        text: item['text'],
                        children: item['children']
                       
                        
                    });
                }
            menu.getRootNode().appendChild(nodes);
          
            view.add(menu);
            view.body.unmask();
            
        });
    },

   

     init: function(application) {

        this.control({
             "mainmenu": {
                 render: this.renderDynamicMenu
             }
         });
     }
});
