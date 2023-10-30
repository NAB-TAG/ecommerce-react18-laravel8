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
