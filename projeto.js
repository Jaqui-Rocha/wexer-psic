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


// tentando Crud

const ListaPacientes={
  Pacientes:[
    {Codigo:'0',Nome:'', CPF:'',Email:'',Sexo:'',DataDeNascimento:'',EstadoCivil:'',Naturalidade:'',Nacionalidade:'',Profissao:'',Escolaridade:'',Mae:'',Pai:'',

    }
  ]
}
// Função criar Pacientes
function CriarPacientes(dados){
ListaPacientes.Pacientes.push({
  Codigo:ListaPacientes.Pacientes.length+ 1,
  Nome:dados.nome,
  CPF:dados.CPF,
  Email,Sexo,DataDeNascimento,EstadoCivil,Nacionalidade,Profissao,Escolaridade,Mae,Pai
});

} 
CriarPacientes('2, Paciente');
console.log(ListaPacientes.Pacientes)

//Função Ler Dados Pacientes
function MostrarPacientes(){
  return ListaPacientes.Pacientes;

}
console.log(MostrarPacientes)
//Função Editar Dados
function Editar(){

}


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