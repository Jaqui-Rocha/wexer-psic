let dadosUsuario2= document.querySelector('#dadosUsuario')
let pointer2=document.querySelector('.pointer2')
pointer2.addEventListener('click',()=>{
dadosUsuario2.style.display='block';
dadosUsuario2.addEventListener('click',()=>{
  dadosUsuario2.style.display='none';
});

})

///modal nova sessao
let fundoNovaSessao= document.querySelector('#fundoNovaSessao')
let modalNovaSessao=document.querySelector('#modalNovaSessao')

function openModalNovaSessao(){
  fundoNovaSessao.style.display= 'block';
  modalNovaSessao.style.display = 'block';
}
function fecharModalNovaSessao(){
  fundoNovaSessao.style.display= 'none';
  modalNovaSessao.style.display='none';
}

//modal fato relevante- pag prontuario

let fundoFatoRelevante= document.querySelector('#fundoFatoRelevante');
let modalFatoRelevante=document.querySelector('#modalFatoRelevante'); 

function openFatoRelevante(){
  
  fundoFatoRelevante.style.display= 'block';
  modalFatoRelevante.style.display = 'block';
}
function fecharModalFatoRelevante(){
  fundoFatoRelevante.style.display= 'none';
  modalFatoRelevante.style.display='none';
}
