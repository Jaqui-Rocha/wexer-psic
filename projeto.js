let fundoModal= document.querySelector('#fundoModal');
let modalCadastro= document.querySelector('#modalCadastro');
let modalEditar= document.querySelector('#modalEditar');
let modalDados= document.querySelector('#modalDados');
let modalCheck= document.querySelector('#modalCheck');
let fundoEditar= document.querySelector('#fundoEditar');
let fundoExcluir= document.querySelector('#fundoExcluir');
const bntCriar = document.querySelector('#bntCriar');
const formCriar= document.querySelector('#formCriar');

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
  
  fundoEditar.style.display= 'block';
  modalEditar.style.display = 'block';
}


formCriar.addEventListener('submit',  e =>{
//  e.preventDefault()
 btnCriar.addEventListener('click', e =>{
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