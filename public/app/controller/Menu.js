Ext.define('MyApp.controller.Menu', {
    extend: 'Ext.app.Controller',
stores: [
        'menu.Breadstoretwo',
        'menu.Rasxodstore'
    ],
    refs: [
        {
            ref: 'mainPanel',
            selector: 'mainoblojka'
        },
       
          {
            ref: 'bredPanel',
            selector: 'navigation-toolbar'
        },
    ],
  


//       var mainPanel = this.getMainPanel();


       
    
    onTrClick: function(view, record, item, index, event, options){
       var mainPanel = this.getMainPanel();

    mainPanel.getViewModel().set('click', true);

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