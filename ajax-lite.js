var xhr;

(function () {
    "use strict";

    xhr = function (method, url, data) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();

            request.open(method, url, true);
            request.onload = resolve;
            request.onerror = reject;
            request.send(data);
        });
    };
    
})();