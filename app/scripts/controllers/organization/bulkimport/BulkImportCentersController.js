(function (module) {
    mifosX.controllers = _.extend(module, {
        BulkImportCentersController: function (scope, resourceFactory, location) {

            scope.getCenterTemplate = function () {
                resourceFactory.centerBulkImportResource.get({}, function (data) {
                    var file = new File([data.data], 'center-import-template.xls',{type: 'application/vnd.ms-excel'});
                    saveAs(file);
                });
            };

            scope.upload = function (){
                var fd = new FormData();

                fd.append('file', scope.uploadfile);

                resourceFactory.centerBulkImportResource.upload({}, fd, function (data){
                    console.log("upload success");
                });
            };
        }
    });
    mifosX.ng.application.controller('BulkImportCentersController', ['$scope','ResourceFactory', '$location', 'dateFilter',
        mifosX.controllers.BulkImportCentersController]).run(function ($log) {
        $log.info("BulkImportCentersController initialized");
    });
}(mifosX.controllers || {}));