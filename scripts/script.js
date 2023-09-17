const form=document.querySelector('form');
import hamburgeMenu from "./menu.js";

form.addEventListener("submit",(event) => {
    event.preventDefault();
    const nombres = document.querySelector("#nombre");
    const asunto = document.querySelector("#empresa");
    const correo = document.querySelector("#correo");
    const telf = document.querySelector("#num");
    const mensaje = document.querySelector("#mens");
    let corpu={
      asunto:asunto.value,
      nombres:nombres.value,
      correo:correo.value,
      telefono:telf.value,
      mensaje:mensaje.value
    }
    let corpuJson=JSON.stringify(corpu);
    console.log(corpuJson);
    fetch("https://mailerservice-production.up.railway.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: corpuJson
    });

    nombres.value='';
    asunto.value='';
    correo.value='';
    telf.value='';
    mensaje.value='';
  });

const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburgeMenu('.panel-btn','.panel','.menu a');
})
