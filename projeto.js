let fundoModal= document.querySelector('#fundoModal');
let modalCadastro= document.querySelector('#modalCadastro');
let modalEditar= document.querySelector('#modalEditar');
let modalDados= document.querySelector('#modalDados');
let modalCheck= document.querySelector('#modalCheck');
let fundoCheck= document.querySelector('#fundoCheck');
let fundoEditar= document.querySelector('#fundoEditar');
let fundoExcluir= document.querySelector('#fundoExcluir');
let btnCriar= document.querySelector('#btnCriar');
let formCriar= document.querySelector('#formCriar');
let fundoFatoRelevante= document.querySelector('#fundoFatoRelevante');

function openModal(){
  fundoModal.style.display= 'block';
  modalCadastro.style.display = 'block';
}
function openModalEditar(){
  
  fundoEditar.style.display= 'block';
  modalEditar.style.display = 'block';
}
function openModalDados(){
  
  fundoExcluir.style.display= 'block';
  modalDados.style.display = 'block';
}
function openModalCheck(){
  
  fundoCheck.style.display= 'block';
  modalCheck.style.display = 'block';
}
function openFatoRelevante(){
  
  fundoFatoRelevante.style.display= 'block';
  modalFatoRelevante.style.display = 'block';
}


formCriar.addEventListener('submit',  e =>{
 e.preventDefault()
  bntCriar.addEventListener('click', e =>{
  modalCheck.style.display= 'block';
 })
 })


function fecharModal(){
  modalCadastro.style.display = 'none';
  fundoModal.style.display= 'none';
  modalEditar.style.display= 'none';
  modalDados.style.display= 'none';
  modalCheck.style.display= 'none';
  fundoEditar.style.display= 'none';
  fundoExcluir.style.display= 'none';
  fundoCheck.style.display= 'none';
  fundoFatoRelevante.style.display= 'none';
 }
// const toggleModal = () => {
//   modalCadastro.classList.console.log ("teste");
//   fundoModal.classList.toggle("hide");
// };

// [OpenModal,CloseModal,fundoModal].forEach((el)=>{
//   el.addEventListener("click", (OpenModal) => toggleModal());
// });


// tentando Crud

const ListaPacientes={
  Pacientes:[
    {Codigo:'0',Nome:'', CPF:'',Email:'',Sexo:'',DataDeNascimento:'',EstadoCivil:'',Naturalidade:'',Nacionalidade:'',Profissao:'',Escolaridade:'',Mae:'',Pai:'',

    }
  ]
}
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


const visualizarPacientes = async () => {
  const apiResponse = await fetch('http://localhost:3000/Pacientes')
  const pacientes = await apiResponse.json()
  console.log(pacientes)
}
const criarPacientes = async (pacientes) => {
  await fetch("http://localhost:3000/Pacientes", {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pacientes)
  });
}

const addPacientes = async () => {
  const selecionar= document.querySelector('#sexo')
  const pacientes = {
    "id": "1",
    "Nome": document.getElementById('nome'),
    "CPF": document.getElementById('CPF'),
    "Email": document.getElementById('email'),
    "Sexo": selecionar.sexo[indice].text,
    "DataDeNascimento": document.getElementById('nascimento'),
    "EstadoCivil": document.getElementById('nome'),
    "Naturalidade": "",
    "Nacionalidade": "",
    "Profissao": "",
    "Escolaridade": "",
    "Mae": "",
    "Pai": ""
  }

  await criarPacientes(pacientes)
}