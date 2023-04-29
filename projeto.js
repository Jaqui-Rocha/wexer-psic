// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

// const modalCadastro= document.getElementById('modalCadastro');
// const modalEditar= document.getElementById('modalEditar');
// const modalDados= document.getElementById('modalDados');
// const modalCheck= document.getElementById('modalCheck');
// const fundoModal= document.getElementById('fundoModal');

function openModal(){
  let fundoModal= document.querySelector('#fundoModal');
  let modalCadastro= document.querySelector('#modalCadastro');
  fundoModal.style.visibility= 'visible';
  modalCadastro.style.visibility = 'visible';
 
 
}

function fecharModal(){
  let modalCadastro= document.querySelector('#modalCadastro');
  let fundoModal= document.querySelector('#fundoModal');
  modalCadastro.style.visibility = 'hidden';
  fundoModal.style.visibility= 'hidden';
 }
// const toggleModal = () => {
//   modalCadastro.classList.console.log ("teste");
//   fundoModal.classList.toggle("hide");
// };

// [OpenModal,CloseModal,fundoModal].forEach((el)=>{
//   el.addEventListener("click", (OpenModal) => toggleModal());
// });