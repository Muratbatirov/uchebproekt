Ext.define('MyApp.view.charts.BalansModel', {
    extend: 'Ext.app.ViewModel',

   alias: 'viewmodel.balans',

    stores: {
        balans: {
            fields: [
                {name: 'mesto'},
                {name: 'summa'}
            ],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'balans/list',
               
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});