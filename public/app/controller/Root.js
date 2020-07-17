/**
 * The main application controller. This is a good place to handle things like routes.
 */
Ext.define('MyApp.controller.Root', {
    extend: 'Ext.app.Controller',
     

     init: function() {
        this.addRef([{
            ref: 'main',
            selector: '[xtype=mainmenu]'
        },{
            ref: 'mainPanel',
            selector: 'mainpanel'
        },{
            ref: 'filmsGrid',
            selector: '[xtype=films-grid]'
        }]);
        this.callParent();
    },
    

   

     routes : {
        'home' : 'onHome'
    },
    onHome : function() {
        var mainPanel = this.getMainPanel();
        if (mainPanel){
            mainPanel.setActiveTab(0);
        }
    },

    
});
