sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageStrip"
], function(Controller, History, MessageStrip) {
    "use strict";

    return Controller.extend("com.ui5flow.helloui5.controller.BaseController", {

        onInit: function() {
            var oRouter, oTarget;
            oRouter = this.getRouter();
        },

        getRouter: function(oView) {
            return sap.ui.core.UIComponent.getRouterFor(oView);
        },

        onNavBack: function(oEvent) {
            var oHistory;
            var sPreviousHash;
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getRouter().navTo("ui5AppsList", {}, true /*no history*/ );
            }
        },

        getGlobalProperty: function(sPath) {
            return this.getOwnerComponent().getModel("globalProperties").getProperty(sPath);
        },

        setGlobalProperty: function(sPath, oValue) {
            this.getOwnerComponent().getModel("globalProperties").setProperty(sPath, oValue);
            return true;
        },

        getI18nText: function(text) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();

            return resourceBundle.getText(text);
        }

    });
});
