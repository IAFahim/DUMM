import {Application, Router} from "https://deno.land/x/oak@v11.1.0/mod.ts";

const router = new Router();
router
    .get("/", (context) => {
        context.response.status = 200;
    }).post("/", (context) => {

    console.log(context.request.body({type: "json"}));
    context.response.status = 200;
})

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: 80});