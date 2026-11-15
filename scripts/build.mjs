import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const base=new URL('../',import.meta.url),read=p=>readFileSync(new URL(p,base),'utf8');
const engine=read('src/engine.mjs').replace(/^export /gm,''),levels=read('src/levels.mjs').replace('export const','const');
const worker=engine+'\nself.onmessage=e=>{const {id,level,state}=e.data;self.postMessage({id,result:solve(level,state)})};';
let app=read('src/app.mjs').replace(/^import .*;\n/gm,'');
app=app.replace("new Worker(new URL('./solver-worker.mjs',import.meta.url),{type:'module'})",`new Worker(URL.createObjectURL(new Blob([${JSON.stringify(worker)}],{type:'text/javascript'})))`);
let html=read('index.html').replace('<link rel="stylesheet" href="src/style.css">',`<style>\n${read('src/style.css')}\n</style>`).replace('<script type="module" src="src/app.mjs"></script>',()=>`<script type="module">\n// ---- Pure game engine ----\n${engine}\n// ---- Verified campaign data ----\n${levels}\n// ---- Presentation and local state ----\n${app}\n</script>`);
mkdirSync(new URL('release/',base),{recursive:true});writeFileSync(new URL('release/index.html',base),html);console.log('Built self-contained release/index.html:',Buffer.byteLength(html),'bytes');
