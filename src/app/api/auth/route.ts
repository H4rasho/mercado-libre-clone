export function GET(request: Request) {

    // Obtiene el token de la request en los parametros
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    console.log(url)

    return new Response(JSON.stringify({
        code,
    }), { status: 201 });
}