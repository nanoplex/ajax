var request,
    xhr;

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

    request = function (url) {
        Object.defineProperty(request, 'url', {
          enumerable: false,
          configurable: false,
          writable: false,
          value: url
        });
        
        return request;
    };
    
    request.json = function (callback) {
        xhr("GET", request.url).then(function (response) {
            callback(JSON.parse(response.target.response));
        }).catch(console.warn);
    };
    
    request.text = function (callback) {
        xhr("GET", request.url).then(function (response) {
            callback(response.target.response);
        }).catch(console.warn);
    };
    
    request.send = function (data) {
        xhr("POST", request.url, data).catch(console.error);
    };
    
})();