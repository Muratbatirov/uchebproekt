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
                }
            },
            listeners:{
            load: function(stor, records, successful, operation, eOpts){
            if(records[0].data.karman1 !=undefined ){
                this.karman1 =records[0].data.karman1;
            }
             if(records[0].data.karman2 !=undefined ){
                this.karman2 =records[0].data.karman2;
            }
             if(records[0].data.karman3 !=undefined ){
                this.karman3 =records[0].data.karman3;
            }
             if(records[0].data.karman4 !=undefined ){
                this.karman4 =records[0].data.karman4;
            }
             if(records[0].data.karman5 !=undefined ){
                this.karman5 =records[0].data.karman5;
            }

  
}}
        }
    }
});