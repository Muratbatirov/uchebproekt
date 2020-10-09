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
      if(record.get('text')==="Доход"){
         return;
    }else if(record.get('text')==="Доходы по категориям"){
        return;
    }else if(record.get('text')==="Добавить доход"){
         this.redirectTo('doxod/dobavit');
    }else if(record.get('text')==="Настройки"){
         this.redirectTo('tools');

    }
    else if(record.get('text')==="Баланс"){

         this.redirectTo('balans');
         
    }
    else{
         this.redirectTo('doxod/categorii/'+record.get('text'));
    }
        
       
      
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
    onBreadcrumbNavSelectionChange: function(breadcrumb, record) {
        if(record.get('text')==="Доход"){
         return;
    }else if(record.get('text')==="Доходы по категориям"){
        return;
    }else if(record.get('text')==="Добавить доход"){
         this.redirectTo('doxod/dobavit');
    }else if(record.get('text')==="Настройки"){
         this.redirectTo('tools');
    }
     else if(record.get('text')==="Баланс"){
     
         this.redirectTo('balans');
         
    }
    else{
         this.redirectTo('doxod/categorii/'+record.get('text'));
    }
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
                 // render: this.onCreatBreadcrumb
            },
            // "breadcrumb-toolbar": {
            //     render: this.onRen
            // },
            'navigation-toolbar': {
                change: 'onBreadcrumbNavSelectionChange'
            },
            
           
         });
     }
});