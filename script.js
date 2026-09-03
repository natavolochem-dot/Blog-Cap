const botoes=document.querySelectorAll("article button");
botoes.forEach(botao=>{let curtiu=false;botao.addEventListener("click",()=>{const texto=botao.querySelector("span");if(!texto)return;if(!curtiu){texto.textContent=Number(texto.textContent)+1;curtiu=true}else{texto.textContent=Number(texto.textContent)-1;curtiu=false}})});
const btnTema=document.querySelector(".btn-tema-escuro");
btnTema.addEventListener("click",()=>{document.body.classList.toggle("tema-escuro");btnTema.textContent=document.body.classList.contains("tema-escuro")?"☀️":"🌙"});
const btnTopo=document.querySelector(".btn-voltar-topo");
btnTopo.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));