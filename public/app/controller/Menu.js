Ext.define('MyApp.controller.Menu', {
    extend: 'Ext.app.Controller',
stores: [
        'menu.Breadstoretwo',
        'menu.Rasxodstore'
    ],
    refs: [
        {
            ref: 'mainPanel',
            selector: 'mainpanel'
        },
        {
            ref: 'mainHed',   
            selector: 'appHeader'
        },
        {
            ref: 'conPanel',   
            selector: 'contentPanel'
        },
          {
            ref: 'bredPanel',
            selector: 'navigation-toolbar'
        },
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
    onTrClick: function(view, record, item, index, event, options){
     
        
        this.redirectTo(record.get('text'));
      
    },
    onRen:function(view, record, item, index, event, options){
  console.log(view.getDockedItems('toolbar[dock="top"]')[0].items);
  var store = Ext.create('MyApp.store.menu.Breadstore');
  store.load();
  // console.log(view.getDockedItems('toolbar[dock="top"]')[0].);
 setTimeout(()  => this.getMainHed().add({
                xtype: 'breadcrumb',
                store:store
               
            }), 1000);
    },
    onCreatBreadcrumb: function(view, record, item, index, event, options){

          var me = this;
         this.getStore('menu.Breadstoretwo').load(function(records, op, success){
         
              var store =Ext.create('Ext.data.TreeStore',{
              root: {
        text: 'Peop',
        expanded: true,
        leaf:false
    },

                   
                 }); 
              var menu = Ext.create('MyApp.view.Breadcrumb',{
                   cls: 'button-text',
                    height: 48,
                    store: store
                   
                 });
             
              
               Ext.each(records, function(record){
                 menu.getStore().getRoot().appendChild({
                         
                         text: record.data['text'],
   
                     });

          }); 
               for (let t = 0;  t < records.length; t++) {
                  
                  
                   
                    for (let i = 0;  i < records[t].data.children.length; i++) {
                       
                   
                 menu.getStore().getRoot().getChildAt(t).appendChild({
                         leaf: true,
                         text: records[t].data.children[i]['text'],
                         
                         iconCls:'fa fa-shopping-cart fa-lg'
                        
                     });} 
}
          
               
               
               
               var conPanel = me.getConPanel();
               conPanel.addDocked(menu);
         });
    },

     init: function(application) {

        this.control({
            
            //  "mainmenu": {
            //      render: this.renderDynamicMenu
            //  },
            //   "maintree": {
            //     itemclick: this.onTreePanelItemClick
            // },
            "mainmenu": {
                itemclick: this.onTrClick,
                  render: this.onCreatBreadcrumb
            },
            "breadcrumb-toolbar": {
                render: this.onRen
            },
            'navigation-toolbar': {
                change: 'onBreadChange'
            },
         });
     }
});