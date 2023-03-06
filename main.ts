import {serve} from "https://deno.land/std@0.177.0/http/server.ts";

serve(async (req) => {
    switch (req.method) {
        case "GET": {
            return new Response("Hello World");
        }
        case "POST": {
            const body = await req.json();
            return new Response(JSON.stringify(body), {
                headers: {"content-type": "application/json"},
            });
        }
        default:
            return new Response("Method Not Allowed", {status: 405});
    }
});