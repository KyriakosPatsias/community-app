(function (module) {
    mifosX.controllers = _.extend(module, {
        BulkImportController: function (scope, resourceFactory, location, dateFilter, translate) {
            scope.template = [];
            scope.formData = {};
            scope.first = {};
            scope.isCollapsed = true;
            scope.showdatefield = false;
            scope.repeatEvery = false;
            scope.first.date = new Date();
            scope.translate = translate;
            scope.criterias = [];
            scope.formParams = {};
            scope.formParams.offset = 0;

        }
    });
    mifosX.ng.application.controller('BulkImportController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', '$translate', mifosX.controllers.BulkImportController]).run(function ($log) {
        $log.info("BulkImportController initialized");
    });
}(mifosX.controllers || {}));
