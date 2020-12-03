Ext.define('MyApp.view.charts.ChartModel', {
    extend: 'Ext.app.ViewModel',

   alias: 'viewmodel.chartmodel',

    stores: {
        doxodchartstore: {
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
                },
                headers:{
                    'Accept' : 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem("token")
                         }
            }
        },
         rasxodchartstore: {
            fields: [
                {name: 'categorya'},
                {name: 'summa'}
            ],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'chartras/list',
                extraParams:{
   'meses':new Date().getMonth(),
   'year':new Date().getFullYear()
   },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                headers:{
                    'Accept' : 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem("token")
                         }
            }
        },
         doxodcatstore: {
            fields: [
                {name: 'month'},
                {name: 'summa'}
            ],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'chartcat',
        
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                headers:{
                    'Accept' : 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem("token")
                         }
            }
        },
           rasxodcatstore: {
            fields: [
                {name: 'month'},
                {name: 'summa'}
            ],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'chartcatras',
        
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                headers:{
                    'Accept' : 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem("token")
                         }
            }
        },
         rasxodcatstore: {
            fields: [
                {name: 'month'},
                {name: 'summa'}
            ],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'chartcatras',
        
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                headers:{
                    'Accept' : 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem("token")
                         }
            }
        },
          balanschart: {
          
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
                },
                headers:{
                    'Accept' : 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem("token")
                         }
            },
     
        }
    }
});