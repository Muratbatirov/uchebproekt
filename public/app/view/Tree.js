Ext.define('MyApp.view.Tree', {
    extend: 'Ext.tree.Panel',

    xtype: 'mainmenu',
    id: 'mainmenu',

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
     rootVisible: false,
     store: {
        type: 'menyu'},

         columns: [{
        xtype: 'treecolumn',
        flex: 1,
        dataIndex: 'text',
       
       
    }],
   
});     