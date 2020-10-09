Ext.define('MyApp.view.charts.ChartModel', {
    extend: 'Ext.app.ViewModel',

   alias: 'viewmodel.sales-film-category',

    stores: {
        salesFilmCategory: {
            fields: [
                {name: 'categorya'},
                {name: 'summa'}
            ],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'chart/list',
                extraParams:{
   'meses':new Date().getMonth(),
   'year':new Date().getFullYear()
   },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        },
          balanschart: {
            fields: [
                {name: 'month'},
                {name: 'summa'}
            ],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'chartbalans/list',
                extraParams:{
   'meses':new Date().getMonth(),
   'year':new Date().getFullYear()
   },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});