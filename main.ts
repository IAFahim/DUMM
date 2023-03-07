import {serve} from "https://deno.land/std@0.178.0/http/server.ts";

const url: string | undefined = Deno.env.get("URL"); //https://gslzopouyhfpxttlxnvg.supabase.co/rest/v1/UMMD
const access_token: string | undefined = Deno.env.get("AccessToken");
const Api_key: string | undefined = Deno.env.get("Apikey");



const server = serve({ port: 8000 });

for await (const req of server) {
    if (req.method === "GET") {
        const body = await req.body();
        const value = new TextDecoder().decode(body);
        console.log(value + "get");
        req.respond({ status: 200 });
    } else {
        const body = await req.body();
        const value = new TextDecoder().decode(body);
        console.log(value + "post");
        req.respond({ status: 200 });
    }
}