(function (module) {
    mifosX.controllers = _.extend(module, {
        BulkImportOfficesController: function (scope, resourceFactory, location) {

            scope.getOfficeTemplate = function () {
                resourceFactory.officeBulkImportResource.get({}, function (data) {
                    var file = new File([data.data], 'office-import-template.xls',{type: 'application/vnd.ms-excel'});
                    saveAs(file);
                });
            };
        }
    });
    mifosX.ng.application.controller('BulkImportOfficesController', ['$scope','ResourceFactory', '$location', 'dateFilter',
        mifosX.controllers.BulkImportOfficesController]).run(function ($log) {
        $log.info("BulkImportOfficesController initialized");
    });
}(mifosX.controllers || {}));