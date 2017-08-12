(function (module) {
    mifosX.controllers = _.extend(module, {
        BulkImportClientsController: function (scope, resourceFactory, location) {
            scope.offices = [];
            resourceFactory.officeResource.getAllOfficesInAlphabeticalOrder(function (data) {
                scope.offices = data;
                scope.formData = {
                    isLoanOfficer: true,
                    officeId: scope.offices[0].id,
                };
            });

            scope.submitTemplate = function () {
                scope.csvData = [];
                scope.csvData.push(scope.row.push("name"));
            };
        }
    });
    mifosX.ng.application.controller('BulkImportClientsController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', mifosX.controllers.CreateEmployeeController]).run(function ($log) {
        $log.info("BulkImportClientsController initialized");
    });
}(mifosX.controllers || {}));