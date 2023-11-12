export async function GET(request: Request) {

    const mercadopagoApi = "https://api.mercadopago.com";
    const endpoint = "/v1/customers";


    const url = new URL(request.url);
    const uid = url.searchParams.get('uid');
    const token = url.searchParams.get('token');

    console.log(uid, token);

    if (!uid || !token) return new Response(JSON.stringify({
        error: 'uid and token are required',
    }), { status: 400 });

    const response = await fetch(`${mercadopagoApi}${endpoint}/${uid}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = await response.json();

    if (!data) return new Response(JSON.stringify({
        error: 'No data',
    }), { status: 400 });


    return new Response(JSON.stringify({
        data
    }), { status: 200 });




}