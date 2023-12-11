import { useState } from "react";
import SweetAlert from "../helpers/Alerts/SweetAlert2_class";

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

export async function PostFetchAuth( url, data, header = false ) {
    try {
        const token = await fetch( '/api/token/decrypt', {
            method: 'GET',
        });

        if (token.status == 401) {
            const tokenN = await token.json();

            const title = tokenN[0];
            const message = tokenN[2];
            const type = tokenN[1];

            return [title, type, message];
        }
            let tokenResponse = await token.json();
        console.log(tokenResponse);
        const headers = header ? header : { 'Authorization': 'Bearer ' + tokenResponse[0], };

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
        while (response.status != 200 ) {
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

export async function DeleteFetchAuth( url, data, header = false ) {
    try {
        // Si tiene un header que lo ponga
        const token = await fetch( '/api/token/decrypt', { method: 'GET' })
        // console.log(await token.json())
        if (token.status != 200 || token.status != 201 ) {
            const tokenN = await token.json();

            const title = tokenN[0];
            const message = tokenN[2];
            const type = tokenN[1];

            return [title, type, message];
        }

        let tokenResponse = await token.json();

        const headers = header ? header : { 'Authorization': 'Bearer ' + tokenResponse[0], };

        const response = await fetch( url, {
            method: 'DELETE',
            headers,
        })

        return await response.json();

    } catch ( error ) {
        throw new Error(`Request Failed: ${ error }`);
    }
}
