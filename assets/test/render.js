const { chromium } = require('/root/.npm/_npx/e41f203b7505f1fb/node_modules/playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:480,height:640}});
await p.goto('file:///root/padel-crm/assets/test/comp.html');
await p.screenshot({path:'/root/padel-crm/assets/test/comprobante-ok.png',fullPage:true});
await p.evaluate(()=>{document.getElementById('para').textContent='Pedro Gómez';document.getElementById('alias').textContent='otra.persona.mp';document.getElementById('op').textContent='7700112233';});
await p.screenshot({path:'/root/padel-crm/assets/test/comprobante-otro-alias.png',fullPage:true});
await b.close();console.log('listo');})();
