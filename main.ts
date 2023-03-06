import {serve} from "https://deno.land/std@0.177.0/http/server.ts";

serve(async (req) => {
    switch (req.method) {
        case "GET": {
            return new Response("Hello Worlds!");
        }
        case "POST": {
            const body = await req.body();
            return new Response(body);
        }
        default:
            return new Response("Method Not Allowed", {status: 405});
    }
});