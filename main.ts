import {Application, Router} from "https://deno.land/x/oak@v11.1.0/mod.ts";

const url: string | undefined = Deno.env.get("URL"); //https://gslzopouyhfpxttlxnvg.supabase.co/rest/v1/UMMD
const access_token: string | undefined = Deno.env.get("AccessToken");
const Api_key: string | undefined = Deno.env.get("Apikey");


const router = new Router();

router.post("/", async (context) => {
    const body = await context.request.body().value;
    console.log(body);
    const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": `${Api_key}`,
            "Authorization": `Bearer ${access_token}`,
        },
        body: JSON.stringify(body),
    });
    console.log(response.status);
    context.response.status = 200;
});

router.get("/", async (context) => {
    const body = await context.request.body().value;
    console.log(body["social_id"]);
    console.log(body);
    // const response = await fetch(`${url}?select=data&social_id=eq.${body}`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "apikey": `${Api_key}`,
    //         "Authorization": `Bearer ${access_token}`,
    //     },
    //     });


});


const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: 80});