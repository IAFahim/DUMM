import {Application, Router} from "https://deno.land/x/oak@v11.1.0/mod.ts";

const url: string | undefined = Deno.env.get("URL"); //https://gslzopouyhfpxttlxnvg.supabase.co/rest/v1/UMMD
const access_token: string | undefined = Deno.env.get("AccessToken");
const Api_key: string | undefined = Deno.env.get("Apikey");


const router = new Router();

router.post("/", async (context) => {
    const body = await context.request.body().value;
    console.log(body);
    context.response.status = 200;
    // const response = await fetch(`${url}`, {
    //     method: "POST",
    //     headers: {
    //     "Content-Type": "application/json",
    //     "apikey": `${Api_key}`,
    //     "Authorization": `Bearer ${access_token}`,
    //     },
    //     body: JSON.stringify(data),
    // });
    // const json = await response.json();
    // context.response.body = json;
});

router.get("/", async (context) => {
    context.response.body = "Hello World!";
    console.log("From get");
    context.response.status = 200;
});


const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: 80});