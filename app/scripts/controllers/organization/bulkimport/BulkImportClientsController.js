(function (module) {
    mifosX.controllers = _.extend(module, {
        BulkImportClientsController: function (scope, resourceFactory, location) {

            scope.getTemplate = function () {
                resourceFactory.clientBulkImportResource.get({}, function (data) {
                    var file = new File([data.data], 'client-import-template.xls',{type: 'application/vnd.ms-excel'});
                    saveAs(file);
                });
            };
        }
    });
    mifosX.ng.application.controller('BulkImportClientsController', ['$scope','ResourceFactory', '$location', 'dateFilter', mifosX.controllers.BulkImportClientsController]).run(function ($log) {
        $log.info("BulkImportClientsController initialized");
    });
}(mifosX.controllers || {}));