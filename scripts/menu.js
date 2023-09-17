export default function hamburgeMenu(panelBtn,panel,menuLink){
  const d=document;
  d.addEventListener("click",e=>{
    console.log("corre");
    if(e.target.matches(panelBtn)|| e.target.matches(`${panelBtn} *`)){
        d.querySelector(panel).classList.toggle("is-active");
        d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)){
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");
    }
  })
}