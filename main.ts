import {Application, Router} from "https://deno.land/x/oak/mod.ts";
const URL= Deno.env.get("apikey");
const JWT= Deno.env.get("Authorization");

const app = new Application();
const router = new Router();

router.get("/GET", (context) => {
    const queryParams = context.request.url.searchParams;

})

router.post("/POST", async (context) => {
    const body = await context.request.body();
    console.log(body.value);
})

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });