import{o as m,u as c,j as s,F as t}from"./index-3e424f74.js";import{o as d}from"./onSubmitForm-5434c066.js";import{C as l}from"./ContentLayout-207c9850.js";const u=()=>{const{authStore:n}=c(),{state:e}=n,o=r=>{d({event:r,errorCB:()=>n.setState({status:"error",message:"fill fields"}),successCB:([a,i])=>n.login({idInstance:a,apiTokenInstance:i})})};return s.jsx(l,{children:s.jsx("div",{className:"w-[20vw]",children:s.jsxs(t,{onSubmit:o,method:"GET",className:"mt-6",children:[s.jsx(t.Title,{children:"WhatsApp"}),s.jsx(t.Input,{type:"number",name:"IdInstance",children:"IdInstance"}),s.jsx(t.Input,{type:"text",name:"ApiTokenInstance",children:"ApiTokenInstance"}),s.jsx(t.Button,{type:"submit",disabled:e.status==="loading",isLoading:e.status==="loading",children:"Login"}),e.status==="error"&&s.jsx(t.Error,{children:e.message})]})})})},j=m(u);export{j as default};
