(function (module) {
    mifosX.controllers = _.extend(module, {
        BulkImportClientsController: function (scope, resourceFactory, location) {
            scope.bulkImportTemplate="";

            scope.submitTemplate = function () {
                resourceFactory.clientBulkImportResource.get({}, function (data) {
                               scope.bulkImportTemplate = data || "";
                });
            };
        }
    });
    mifosX.ng.application.controller('BulkImportClientsController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', mifosX.controllers.BulkImportClientsController]).run(function ($log) {
        $log.info("BulkImportClientsController initialized");
    });
}(mifosX.controllers || {}));