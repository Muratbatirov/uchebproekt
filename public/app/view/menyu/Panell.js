Ext.define('MyApp.view.menyu.Panel', {
    extend: 'Ext.tree.Panel',

    xtype: 'mainmenu',
    

   
   
    
  title: 'Examples',
    rootVisible: false,
    lines: false,
    useArrows: true,
    hideHeaders: true,
    collapseFirst: false,
    width: 250,
    minWidth: 100,
    height: 200,
    split: true,
   
    collapsible: true,
    enableColumnResize: false,
    enableColumnMove: false,
       bind: {
        selection: '{selectedView}'
    },
    renderer: 'getStatus',
 store: 'rasxod',
   
    header:{
        height:48
    },
     columns: [{
        xtype: 'treecolumn', 
        header: 'Name', 

        dataIndex: 'text', 
        flex: 1
    }]
     

        
        

   
        
       
    
     

  
   
   
});     