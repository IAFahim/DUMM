import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/google", (ctx) => {
    ctx.response.body = "md -Path $env:temp\firefoxinstall -erroraction SilentlyContinue | Out-Null $Download = join-path $env:temp\firefoxinstall firefox_installer.exe";
});

router.get("/", (ctx) => {
    ctx.response.body = "Invoke-WebRequest 'https://download.mozilla.org/?product=firefox-latest&os=win64&lang=en-US' -OutFile $Download";
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });