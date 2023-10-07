export function GET(request: Request) {
    return new Response(JSON.stringify(request), { status: 201 });
}