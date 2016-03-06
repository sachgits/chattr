export const ajax = {
    get: (url, requestProps) => {
        let xhr = new XMLHttpRequest();
        let fullUrl = addParamsToUrl(url, requestProps.data);
        requestProps.type = requestProps.type || 'GET';
        xhr.responseType = requestProps.responseType || xhr.responseType;
    
        xhr.open(requestProps.type, encodeURI(fullUrl));
        xhr.onload = () => {
            if(xhr.status === 200) {
                requestProps.success.call(this, xhr.response);
            } else {
                requestProps.failure.call(this, xhr.status, xhr.statusText);
            }
        };
        xhr.send();
    },
    post: (path, params, method) => {
        method = method || "post";
        var form = document.createElement("form");
        form.setAttribute("method", method);
        form.setAttribute("action", path);
    
        for(var key in params) {
            if(params.hasOwnProperty(key)) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);
    
                form.appendChild(hiddenField);
             }
        }
    
        document.body.appendChild(form);
        form.submit((e) => {
            e.preventDefault();
        });
    }
};

const addParamsToUrl = (url, data) => {
    let fullUrl = url + '?';
    for(let param in data) {
        if(data.hasOwnProperty(param)) {
            fullUrl = fullUrl + '&' + param + '=' + data[param];
        }
    }
    return fullUrl;
}