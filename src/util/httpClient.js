var axios = require('axios');

function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

function filterNull(obj) {
    for (var key in obj) {
        if (obj[key] === null) {
            delete obj[key]
        }
        if (toType(obj[key]) === 'string') {
            obj[key] = obj[key].trim()
        } else if (toType(obj[key]) === 'object') {
            obj[key] = filterNull(obj[key])
        } else if (toType(o[key]) === 'array') {
            obj[key] = filterNull(obj[key])
        }
    }
    return obj;
}

function apiAxios(method, url, params, success, failure) {
    if (params) {
        params = filterNull(params)
    }
    axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        baseURL: "",
        withCredentials: false
    }).then(function (res) {
        if (res.data&&(res.data.code === 0 || res.data.success)) {
            if (success) {
                success(res.data, res);
            }
        } else {
            if (failure) {
                failure(res.data, res);
            } else {
                console.error('error: ' + JSON.stringify(res));
            }
        }
    }).catch(function (err) {
            if (failure) {
                failure(err);
            }
        });
}
//方法
export default {
    get: function (url, params, success, failure) {
        return apiAxios('GET', url, params, success, failure)
    },
    post: function (url, params, success, failure) {
        return apiAxios('POST', url, params, success, failure)
    },
    put: function (url, params, success, failure) {
        return apiAxios('PUT', url, params, success, failure)
    },
    delete: function (url, params, success, failure) {
        return apiAxios('DELETE', url, params, success, failure)
    }
}