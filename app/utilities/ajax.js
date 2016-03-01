export const ajax = (requestProps) => {
    let xhr = new XMLHttpRequest();
    let fullUrl = addParamsToUrl(requestProps.url, requestProps.data);
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
}

const addParamsToUrl = (url, data) => {
    let fullUrl = url + '?';
    for(let param in data) {
        if(data.hasOwnProperty(param)) {
            fullUrl = fullUrl + '&' + param + '=' + data[param];
        }
    }
    return fullUrl;
}