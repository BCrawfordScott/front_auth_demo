const resHandler = async response => {
    // debugger
    if (response.ok && response.status < 400) {
        return await response.json()
    } else {
        return await Promise.reject(await response.json())
    }
}

const makeRequest = async ({ path, method, headers, data }) => {
    const response = await fetch(path, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        headers: Object.assign({}, headers, { 
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
        }),
        body: method === 'GET' ? null : JSON.stringify(data),
    });
    
    return resHandler(response);
}

export const postRequest = async ({path, data, credentials}) => {
    const headers = { 'Authorization': `${credentials}` };
    return await makeRequest({
        method: 'POST',
        path,
        headers,
        data,
    })
}

export const getRequest = async ({ path, credentials }) => {
    const headers = { 'Authorization': `${credentials}` };
    return await makeRequest({
        method: 'GET',
        path,
        headers,
    })
}

export const deleteRequest = async ({ path, data, credentials }) => {
    const headers = { 'Authorization': `${credentials}` };
    return await makeRequest({
        method: 'DELETE',
        path,
        headers,
        data
    })
}
