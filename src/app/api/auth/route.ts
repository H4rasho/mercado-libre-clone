export async function GET(request: Request) {

    const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } = process.env;

    if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URL) return new Response(JSON.stringify({
        error: 'CLIENT_ID and CLIENT_SECRET are required',
    }), { status: 400 });


    // Obtiene el token de la request en los parametros
    const url = new URL(request.url);
    const code = url.searchParams.get('code');

    if (!code) return new Response(JSON.stringify({
        error: 'code is required',
    }), { status: 400 });

    const params = new URLSearchParams();
    params.append('client_id', CLIENT_ID)
    params.append('client_secret', CLIENT_SECRET);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', REDIRECT_URL);
    params.append("test_token", 'true')


    try {
        const response = await fetch(`https://api.mercadopago.com/oauth/token?${params.toString()}`, {
            method: 'POST',
        })
        const data = await response.json();

        // Redirecciona al usuario a la pagina de inicio con el token y el refresh token y uid
        return Response.redirect(`https://mercado-libre-clone-two.vercel.app/?token=${data?.access_token}&refresh_token=${data?.refresh_token}&uid=${data?.user_id}`, 301);

    }
    catch (err) {
        return new Response(JSON.stringify({
            error: err,
        }), { status: 400 });
    }


}