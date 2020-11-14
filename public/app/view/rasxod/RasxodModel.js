Ext.define('Packt.view.security.RasxodModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.rasxod',

    stores: {
        doxodcombo: {
            model: 'MyApp.model.doxod.Rasxodcombo',
            autoLoad: true
        },
        categcombo: {
            model: 'MyApp.model.doxod.RasCategcombo',
            autoLoad: true
        }

    },
    data: {
       
       
        doxodroute: null
    
         }
//    },
//
//    formulas: {
//        currentUser : {
//
//            bind: {
//                bindTo: '{usersGrid.selection}',
//                deep: true
//            },
//
//            get: function(user){
//                return user;
//            },
//
//            set: function(user){
//                var me = this;
//                if (!user.isModel){
//                    user = me.get('users').getById(user);
//                }
//                me.set('currentUser',user);
//            }
//        }
//    }
});