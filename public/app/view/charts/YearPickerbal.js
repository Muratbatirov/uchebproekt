 Ext.define('MyApp.view.charts.YearPickerbal', {
        extend: 'Ext.form.field.Date',
        xtype: 'yearfieldbal',

        requires: ['Ext.picker.Month', 'MyApp.view.charts.OnlyYearPicker'],
        alternateClassName: ['Ext.form.MonthField', 'Ext.form.Month'],
        selectMonth: null,
        value: new Date(), 
         format: 'Y',
       
        createPicker: function() {
            var me = this,
                format = Ext.String.format;
            return Ext.create('MyApp.view.charts.OnlyYearPicker', {
                pickerField: me,
                ownerCt: me.ownerCt,
                renderTo: document.body,
                floating: true,
                hidden: true,
                showToday:true,
                focusOnShow: true,
                 format: 'Y-m-j H:i:s',
                listeners: {
                    select: {
                        scope: me,
                        fn: me.onSelect
                    },
                    monthdblclick: {
                        scope: me,
                        fn: me.onOKClick
                    },
                    yeardblclick: {
                        scope: me,
                        fn: me.onOKClick
                    },
                    OkClick: {
                        scope: me,
                        fn: me.onOKClick
                    },
                    CancelClick: {
                        scope: me,
                        fn: me.onCancelClick
                    }
                },
                keyNavConfig: {
                    esc: function() {
                        me.collapse();
                    }
                }
            });
        },
        onCancelClick: function() {
            var me = this;
            me.selectMonth = null;
            me.collapse();
        },
        onOKClick: function() {
            var me = this;
            if (me.selectMonth) {
                me.setValue(me.selectMonth);
                me.fireEvent('select', me, me.selectMonth);
            }
            me.collapse();
           
            var chartpanel =this.up('contentPanel').down('balanschartpanel');
//var chartpanel = this.up('contentPanel', 2)
//console.log(this.up('contentPanel').down('rasxodgridcat'))
             chartpanel.getViewModel().getStore('balanschart').getProxy().setExtraParams({
   'param':chartpanel.getViewModel().get('doxodroute'),  'meses':me.selectMonth.getMonth(),
   'year':me.selectMonth.getFullYear()
   });
          chartpanel.getViewModel().getStore('balanschart').load();
          
        },
        onSelect: function(m, d) {
            var me = this;
            me.selectMonth = new Date((d[0] + 1) + '/1/' + d[1]);
            

        }
    });

   