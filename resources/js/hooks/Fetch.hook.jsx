export async function PostFetch( url, data, header = false ) {
    try {
        // Si tiene un header que lo ponga
        const headers = header ?
            header :
            {  };

        const response = await fetch( url, {
            method: 'POST',
            body: data,
            headers,
        })

        return await response.json();

    } catch ( error ) {
        throw new Error(`Request Failed: ${ error }`);
    }
}

export async function GetFetch( url, header = false ) {
    try {
        // Si tiene un header que lo ponga
        const headers = header ?
            header :
            {  };

        const response = await fetch( url, {
            method: 'GET',
            headers,
        })

        return await response.json();

    } catch ( error ) {
        throw new Error(`Request Failed: ${ error }`);
    }
}

export async function DeleteFetch( url, data, header = false ) {
    try {
        // Si tiene un header que lo ponga
        const headers = header ?
            header :
            {  };

        const response = await fetch( url, {
            method: 'DELETE',
            headers,
        })

        return await response.json();

    } catch ( error ) {
        throw new Error(`Request Failed: ${ error }`);
    }
}
