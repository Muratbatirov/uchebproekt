Ext.define('MyApp.view.login.Register', {
    extend: 'Ext.window.Window',

    xtype: 'register-dialog',

    requires: [
        
    ],

    controller: 'login',
    modal:true,
    autoShow: true,
    height: 350,
    width: 360,

    layout: {
        type: 'fit'
    },
    iconCls: 'fa fa-key fa-lg',
    title: "login",
    closeAction: 'hide',
    closable: false,
    draggable: false,
    resizable: false,

    items: [
        {
            xtype: 'form',
            reference: 'form',
            scrollable:true,
            bodyPadding: 15,
            defaults: {
                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 70,
                allowBlank: false,
                vtype: 'alphanum',
                minLength: 3,
                msgTarget: 'under',
                enableKeyEvents: true,
                listeners: {
                    specialKey: 'onTextFieldSpecialKey'
                }
            },
            items: [
                {
                    name: 'name',
                    fieldLabel: 'user',
                    maxLength: 25,
                    value: ''
                },
                {
                     vtype: 'email',
                     fieldLabel: 'Email',
                    label: 'Email',
                    name: 'email'
                },
                {
                    inputType: 'password',
                    name: 'password',
                    fieldLabel: 'password',
                    id: 'password',
                    maxLength: 15,
                    value: '',
                  

                   
                    listeners: {
                        keypress: 'onTextFieldKeyPress'
                    }
                },
                 {
                    inputType: 'password',
                    name: 'password_confirmation',
                    fieldLabel: 'confirm password',
                    id: 'passconfirm',
                    maxLength: 15,
                    value: '',
                    vtype: 'customPass',
                    //msgTarget: 'side',
                    listeners: {
                        keypress: 'onTextFieldKeyPress'
                    }
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                       
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-times fa-lg',
                            text: 'cencel',
                            listeners: {
                                click: 'onButtonClickCancel'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'submit',
                            formBind: true,
                            iconCls: 'fa fa-sign-in fa-lg',
                            text: 'submit',
                            listeners: {
                                click: 'onButtonClickSubmit'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});