export function GET(request: Request) {
    console.log(request)
    return new Response(JSON.stringify(request), { status: 201 });
}