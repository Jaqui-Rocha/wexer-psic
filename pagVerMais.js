// modal do usuario na pag prontuario2
let dadosUsuario= document.querySelector('.dadosUsuario')
let pointer=document.querySelector('.pointer')
pointer.addEventListener('click',()=>{
dadosUsuario.style.display='block';
dadosUsuario.addEventListener('click',()=>{
  dadosUsuario.style.display='none';
});

})