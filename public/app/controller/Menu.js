Ext.define('MyApp.controller.Menu', {
    extend: 'Ext.app.Controller',
stores: [
        'menu.Doxodstore',
        'menu.Rasxodstore'
    ],
    refs: [
        {
            ref: 'mainPanel',
            selector: 'mainpanel'
        }
    ],
   renderDynamicMenu: function(view, options) {

  
        view.body.mask('Loading Menus... Please wait...');
        var menu = Ext.create('MyApp.view.menyu.Tree',{
                    title: 'titll',
                   
                 });
        var nod = [{text:'doxod'},{text:'rasxod'}];
        menu.getRootNode().appendChild(nod);
        console.log(nod);
        this.getStore('menu.Doxodstore').load(function(records, op, success){
             
            menu.getRootNode().getChildAt(0).appendChild({
                         leaf: true,
                         text: "Категории",
                         
                         iconCls:'fa fa-shopping-cart fa-lg'
                        
                     });
   

                 for (var i=0; i<records.length; i++){
                     
 
                   menu.getRootNode().getChildAt(0).appendChild({
                         leaf: true,
                         text: records[i].data['name'],
                         
                         iconCls:'fa fa-shopping-cart fa-lg'
                        
                     });
   
                 }
                  
                
                 
                 console.log(menu.getRootNode().getChildAt(0));
                 });

        this.getStore('menu.Rasxodstore').load(function(records, op, success){
             
            
              



                 
                   
                
                 
                     

                 for (var i=0; i<records.length; i++){
                    

                    menu.getRootNode().getChildAt(1).appendChild({
                         leaf: true,
                         text: records[i].data['name'],
                         
                         iconCls:'fa fa-shopping-cart fa-lg'
                        
                     });
                 }
                  console.log(menu.getRootNode());
                  
                
            
             view.add(menu);
             view.body.unmask();
                 });
         
          console.log(nod);
            
        
    },

   onTreePanelItemClick: function(view, record, item, index, event, options){
    console.log(record.get('text'));
    if(record.get('text')==="Категории"){
          this.redirectTo('doxod/kategorii');
    }
//       var mainPanel = this.getMainPanel();
//         console.log('panel');
//         var newTab = mainPanel.items.findBy(
//             function (tab){
//                 return tab.title === "title";
//             });

// if (!newTab){
//         newTab = mainPanel.add({
//                 xtype: 'otchetgrid',
               
//                 title: 'title',
//                 closable: true
//             });
//         }
//        mainPanel.setActiveTab(newTab);

       
    },

     init: function(application) {

        this.control({
            
             "mainmenu": {
                 render: this.renderDynamicMenu
             },
              "maintree": {
                itemclick: this.onTreePanelItemClick
            }
         });
     }
});