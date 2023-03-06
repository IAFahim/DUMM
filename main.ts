import {Application, Router} from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/GET", (context) => {
    context.response.body = "Hello World!";
})

router.post("/POST", async (context) => {
    const body = await context.request.body();
    console.log(body.value);
})

router.put("/", async (context) => {
    context.response.body = "Hello World!";
})

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });