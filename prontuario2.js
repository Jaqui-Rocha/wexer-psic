const miniModal=document.querySelector('#miniModal');
function openMiniModal(){
 miniModal.style.display= 'block';
 
}function fecharMinimodal(){
  miniModal.style.display= 'none';
}
// modal do usuario na pag prontuario2
let dadosUsuario= document.querySelector('.dadosUsuario')
let pointer=document.querySelector('.pointer')
pointer.addEventListener('click',()=>{
dadosUsuario.style.display='block';
dadosUsuario.addEventListener('click',()=>{
  dadosUsuario.style.display='none';
});

})