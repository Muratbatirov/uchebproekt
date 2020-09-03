Ext.define('Packt.view.security.DoxodModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.doxod',

    stores: {
        doxodcombo: {
            model: 'MyApp.model.doxod.Doxodcombo',
            autoLoad: true
        }
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