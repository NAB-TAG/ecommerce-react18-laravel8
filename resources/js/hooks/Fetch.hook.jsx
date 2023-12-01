import { useState } from "react";

export async function PostFetch( url, data, header = false ) {
    try {

        // Si tiene un header que lo ponga
        const headers = header ?
            header :
            {  };

        let response = await fetch( url, {
            method: 'POST',
            body: data,
            headers,
        })

        while (response.status == 500) {
            // setTimeout(async () => {
                response = await fetch( url, {
                    method: 'POST',
                    body: data,
                    headers,
                })
            // }, 4000);
        }
        return await response.json();

    } catch ( error ) {
        throw new Error(`Request Failed: ${ error }`);
    }
}

export async function UpdateFetch( url, data, header = false ) {
    try {
        // Si tiene un header que lo ponga
        const headers = header ?
            header :
            {  };

        const response = await fetch( url, {
            method: 'PUT',
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

        let response = await fetch( url, {
            method: 'GET',
            headers,
        })
        while (response.status != 200) {
            console.log(response.status)
            response = await fetch( url, {
                method: 'GET',
                headers,
            })
        }
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
