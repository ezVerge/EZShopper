import 'isomorphic-fetch';
import {API_REQUEST} from 'store/middleware/apiActions';
import {setLoader} from 'store/ui/uiActions';

// const SERVER_URL = 'http://localhost:5247/ezshopper';
const SERVER_URL = 'https://localhost:44323/ezshopper';

const params = a => {
    let s = [];
    const add = function (k, v) {
        v = typeof v === 'function' ? v() : v;
        v = v === null || v === undefined ? '' : v;

        s[s.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
    };
    const buildParams = function (prefix, obj) {
        let i = null;
        let len = null;
        let key = null;

        if (prefix) {
            if (Array.isArray(obj)) {
                for (i = 0, len = obj.length; i < len; i++) {
                    buildParams(
                        prefix + '[' + (typeof obj[i] === 'object' && obj[i] ? i : '') + ']',
                        obj[i]
                    );
                }
            }
            else if (String(obj) === '[object Object]') {
                for (key in obj) {
                    buildParams(prefix + '[' + key + ']', obj[key]);
                }
            }
            else {
                add(prefix, obj);
            }
        }
        else if (Array.isArray(obj)) {
            for (i = 0, len = obj.length; i < len; i++) {
                add(obj[i].name, obj[i].value);
            }
        }
        else {
            for (key in obj) {
                buildParams(key, obj[key]);
            }
        }
        return s;
    };

    return buildParams('', a).join('&');
};

export const apiMiddleware = ({dispatch}) => next => async action => {
    next(action);

    if (action.type !== API_REQUEST) {return next;}

    dispatch(setLoader(true));

    const defaults = {
        url: '',
        method: 'GET',
        data: null,
        accessToken: null,
        onSuccess: () => {},
        onFailure: () => {},
        label: '',
        headers: new Headers()
    };

    const {
        url,
        method,
        data,
        accessToken,
        onSuccess,
        onFailure,
        label,
        headers
    } = Object.assign(defaults, action.payload);

    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    let options = {
        method: method ? method : undefined,
        mode: 'cors',
        cache: 'no-cache',
        // credentials: 'include',
        headers: headers
    };

    let fullyQualifiedUrl = `${SERVER_URL}${url}`;
    if (data && Object.keys(data).length > 0) {
        if (!method || method === 'GET') {
            const query = params(data);
            fullyQualifiedUrl = `${fullyQualifiedUrl}?${query}`;
        }
        else {
            Object.assign(options, {body: params(data)});
        }
    }

    try {
        //http://localhost:9902/ezpacklistapi/? (for debugging through Visual Studio)
        //http://192.168.1.250:7500/ezpacklistapi/?
        const response = await fetch(fullyQualifiedUrl, options);
        // const response = {
        //     user: {
        //         id: 1,
        //         firstName: 'Steve',
        //         lastName: 'Verge',
        //         username: 'steveverge@gmail.com'
        //     }
        // };
        // const result = await response.json();
        dispatch(onSuccess(response));
    }
    catch (error) {
        console.log(error);
        dispatch(onFailure(error));
    }
    finally {
        dispatch(setLoader(false));
    }

};
