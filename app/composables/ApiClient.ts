import { type ApiPaths } from "~/types/Api"

export const ApiClient = () => {
    const config = useRuntimeConfig()
    const baseUrl = config.public.apiBaseUrl
    const token = config.public.token
    const commonHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
    
    const GET = async <K extends keyof ApiPaths['GET']>(path: K, id?: number): Promise<ApiPaths['GET'][K]> => {
        let requestUrl = path as string;
        requestUrl = requestUrl.replace('{alias}', token);
        
        if (id && requestUrl.includes('id}')) {
            // Можно сделать через URLSearchParams
            requestUrl = requestUrl.replace('{id}', id.toString());
        }

        const response = await fetch(`${baseUrl}${requestUrl}`, {
            method: 'GET',
            headers: commonHeaders
        })
        return await response.json();
    }

    const POST = async <K extends keyof ApiPaths['POST']>(path: K, data: ApiPaths['POST'][K]): Promise<any> => {
        let requestUrl = path as string;
        requestUrl = requestUrl.replace('{alias}', token);

        const response = await fetch(`${baseUrl}${requestUrl}`, {
            method: 'POST',
            headers: commonHeaders,
            body: JSON.stringify(data)
        })

        return response.json()
    }

    return {
        GET,
        POST
    }
}