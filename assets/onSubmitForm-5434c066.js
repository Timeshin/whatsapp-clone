const m=({event:t,successCB:a,errorCB:o})=>{t.preventDefault();const e=Object.fromEntries(new FormData(t.target)),r=Object.values(e);if(r.some(s=>!s)){o();return}a(r)};export{m as o};
