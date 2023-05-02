const urlPacientes= "http://localhost:3000/Pacientes"
//modal cadastro
const fundoModal= document.querySelector('#fundoModal');
const modalCadastro= document.querySelector('#modalCadastro');
function openModal(){
    fundoModal.style.display= 'block';
    modalCadastro.style.display = 'block';
  }
  
function fecharModal(){
  fundoModal.style.display= 'none';
  modalCadastro.style.display = 'none';
  console.log('cagou no pau')
  
 }

//modal editar cadastro
let modalEditar= document.querySelector('#modalEditar');
let fundoEditar= document.querySelector('#fundoEditar');
function openModalEditar(){
  
  fundoEditar.style.display= 'block';
  modalEditar.style.display = 'block';
}
function fecharModalEditar(){
  fundoEditar.style.display= 'none';
  modalEditar.style.display= 'none';
}
//modal dados/excluir cadastro
let modalDados= document.querySelector('#modalDados');
let fundoExcluir= document.querySelector('#fundoExcluir');
function openModalDados(){
  
  fundoExcluir.style.display= 'block';
  modalDados.style.display = 'block';
}
function fecharModalDados(){
  fundoExcluir.style.display= 'none';
 modalDados.style.display= 'none';
 
}
//modal check
let modalCheck= document.querySelector('#modalCheck');
let fundoCheck= document.querySelector('#fundoCheck');
function openModalCheck(){
  
  fundoCheck.style.display= 'block';
  modalCheck.style.display = 'block';
}
function fecharModalCheck(){
  fundoCheck.style.display= 'none';
  modalCheck.style.display= 'none';
  fecharModal();
  
}
//let btnCriar= document.querySelector('#btnCriar');
//let formCriar= document.querySelector('#formCriar');
//  formCriar.addEventListener('submit',  e =>{
//   e.preventDefault()
//    btnCriar.addEventListener('click', e =>{
//    modalCheck.style.display= 'block';
//   })
//   })


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
//modal nova sessao-pag prontuario
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
})

})
// tentando Crud

const Sexo= document.querySelector('#sexo')
const EstadoCivil= document.querySelector('#civil')
const Nacionalidade= document.querySelector('#nacionalidade')
const Nome= document.querySelector('#nome')
const CPF= document.querySelector('#cpf')
const Email= document.querySelector('#email')
const DataDeNascimento= document.querySelector('#nascimento')
const Naturalidade= document.querySelector('#naturalidade')
const Profissao= document.querySelector('#profissao')
const Escolaridade= document.querySelector('#escolaridade')
const Mae= document.querySelector('#mae')
const Pai= document.querySelector('#pai')

const visualizarPacientes = async () => {
  const apiResponse = await fetch(urlPacientes)
  const pacientes = await apiResponse.json()
  console.log(pacientes);
  return pacientes
}
const criarPacientes = async (pacientes) => {
  await fetch(urlPacientes, {    
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
   body: JSON.stringify(pacientes)
  });

}

//botao criar pacientes
const btnCriar = document.querySelector('#btnCriar')
btnCriar.addEventListener('click', async () => {
  const pacientes = {
    
    "Nome": Nome.value,
    "CPF": CPF.value,
    "Email": Email.value,
    "Sexo": Sexo.value,
    "DataDeNascimento": DataDeNascimento.value,
    "EstadoCivil": EstadoCivil.value,
    "Naturalidade": Naturalidade.value,
    "Nacionalidade": Nacionalidade.value,
    "Profissao": Profissao.value,
    "Escolaridade": Escolaridade.value,
    "Mae":Mae.value,
    "Pai": Pai.value
};


await criarPacientes(pacientes);
// fecharModal();
console.log('funciona na escuta');
openModalCheck();


});

const editarPacientes = async (pacientes) => {
  await fetch(urlPacientes, {    
    method: "PUT",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
   body: JSON.stringify(pacientes)
  });
}
const deletarPaciente= async (idPaciente) => {
  await fetch(`${urlPacientes}/${idPaciente}`,{
    method: "DELETE"
  }
  )

}
//função delete
 const excluirDados = document.querySelectorAll('.excluir') 
  excluirDados.addEventListener('click',async)

// Função criar Pacientes
// function CriarPacientes(dados){
// ListaPacientes.Pacientes.push({
//   Codigo:ListaPacientes.Pacientes.length+ 1,
//   Nome:dados.nome,
//   CPF:dados.CPF,
//   Email:dados.Email,
//   Sexo,DataDeNascimento,EstadoCivil,Nacionalidade,Profissao,Escolaridade,Mae,Pai
// });

// } 
// CriarPacientes('2, Paciente');
// console.log(ListaPacientes.Pacientes)

// //Função Ler Dados Pacientes
// function MostrarPacientes(){
//   return ListaPacientes.Pacientes;

// }
// console.log(MostrarPacientes)
// //Função Editar Dados
// function Editar(){

// }


