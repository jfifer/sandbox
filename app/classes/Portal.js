System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Portal;
    return {
        setters:[],
        execute: function() {
            Portal = (function () {
                function Portal() {
                    this.url = "api/portal/:query/:attr";
                }
                Portal.prototype.assignParamsToUrl = function (params) {
                    url = this.url;
                    last = null;
                    for (key in params) {
                        if (!key || !params[key] || params[key] === null) {
                            search = params[last] + "/";
                            return url.substring(0, (url.indexOf(search) + search.length));
                        }
                        else {
                            last = key;
                            pattern = ":" + key;
                            re = new RegExp(pattern, "g");
                            url = url.replace(re, params[key]);
                        }
                    }
                    return url;
                };
                Portal.prototype.listServerGroups = function (params) {
                    url = this.assignParamsToUrl(params);
                    return url;
                };
                return Portal;
            }());
            exports_1("Portal", Portal);
        }
    }
});
//# sourceMappingURL=Portal.js.map