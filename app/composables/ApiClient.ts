import { type ApiPaths } from "~/types/Api"

export const ApiClient = () => {
    const config = useRuntimeConfig()
    const baseUrl = config.public.apiBaseUrl
    const token = config.public.token
    
    const GET = async <K extends keyof ApiPaths['GET']>(path: K, id?: number): Promise<ApiPaths['GET'][K]> => {
        let requestUrl = path as string;
        requestUrl = requestUrl.replace('{alias}', token);
        
        if (id && requestUrl.includes('{id}')) {
            requestUrl = requestUrl.replace('{id}', id.toString());
        }
        const response = await fetch(`${baseUrl}${requestUrl}`)
        return response.json()
    }

    const POST = async <K extends keyof ApiPaths['POST']>(path: K, data: ApiPaths['POST'][K]): Promise<any> => {
        let requestUrl = path as string;
        requestUrl = requestUrl.replace('{alias}', token);

        const response = await fetch(`${baseUrl}${requestUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return response.json()
    }

    return {
        GET,
        POST
    }
}