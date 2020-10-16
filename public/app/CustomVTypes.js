Ext.apply(Ext.form.field.VTypes, {
    //  vtype validation function
    customPass: function(val, field) {
    	var first= field.up('form').down('[name=password]').getValue();
        return val === first;
    },
    // vtype Text property: The error text to display when the validation function returns false
    customPassText: 'Пароль не совпадает'
});