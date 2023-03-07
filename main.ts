import {Application, Router} from "https://deno.land/x/oak@v11.1.0/mod.ts";

const url: string | undefined = Deno.env.get("URL"); //https://gslzopouyhfpxttlxnvg.supabase.co/rest/v1/UMMD
const access_token: string | undefined = Deno.env.get("AccessToken");
const Api_key: string | undefined = Deno.env.get("Apikey");


const router = new Router();
router.get("/", async (context) => {
    if (context.request.method == "GET") {
        const body = await context.request.body().value;
        console.log(body.text + "get");
        context.response.status = 200;
    } else {
        const body = await context.request.body().value;
        console.log(body.text + "post");
        context.response.status = 200;
    }
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: 80});