const urlPacientes= "http://localhost:3000/Pacientes"

const formPesquisar = document.querySelector('#formPesquisar')
formPesquisar.addEventListener('click',async(evento)=>{
  evento.preventDefault();
  const PesquisaChave= document.querySelector('#pesquisa').value
  if(PesquisaChave != ''){
    const Pesquisa= await fetch (`${urlPacientes}?Nome_like=${PesquisaChave}`)
    const vetorJson = await Pesquisa.json()
    console.log(vetorJson);
    document.querySelector('#conteudoTabela').innerHTML='' 
    vetorJson.forEach(elementoVetor =>{
      imprimirPaciente(elementoVetor);
    })

  
  }
})


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
  }

//modal editar cadastro
let modalEditar= document.querySelector('#modalEditar');
let fundoEditar= document.querySelector('#fundoEditar');
async function openModalEditar(idPaciente){
  const paciente= await obterPacienteId(idPaciente);

  document.querySelector('#sexo2').value=paciente.Sexo
  document.querySelector('#civil2').value=paciente.EstadoCivil
  document.querySelector('#nacionalidade2').value=paciente.Nacionalidade
  document.querySelector('#nome2').value=paciente.Nome
  document.querySelector('#cpf2').value=paciente.CPF
  document.querySelector('#email2').value=paciente.Email
  document.querySelector('#nascimento2').value=paciente.DataDeNascimento
  document.querySelector('#naturalidade2').value=paciente.Naturalidade
  document.querySelector('#profissao2').value=paciente.Profissao
  document.querySelector('#escolaridade2').value=paciente.Escolaridade
  document.querySelector('#mae2').value=paciente.Mae
  document.querySelector('#pai2').value=paciente.Pai
  
  fundoEditar.style.display= 'block';
  modalEditar.style.display = 'block';

  const botaoEditarPaciente = document.querySelector('.botaoEditarPaciente') 
  botaoEditarPaciente.addEventListener('click',async()=>{
  
const pacienteEditado =
{
  "Nome": document.querySelector('#nome2').value,
  "CPF": document.querySelector('#cpf2').value,
  "Email": document.querySelector('#email2').value,
  "Sexo": document.querySelector('#sexo2').value,
  "DataDeNascimento": document.querySelector('#nascimento2').value,
  "EstadoCivil": document.querySelector('#civil2').value,
  "Naturalidade": document.querySelector('#naturalidade2').value,
  "Nacionalidade": document.querySelector('#nacionalidade2').value,
  "Profissao": document.querySelector('#profissao2').value,
  "Escolaridade": document.querySelector('#escolaridade2').value,
  "Mae": document.querySelector('#mae2').value,
  "Pai": document.querySelector('#mae2').value,
  
}
  await editarPaciente(idPaciente,pacienteEditado);
  window.location.reload()
  await imprimirListaDePacientes();
  fecharModalEditar()
  


})}
function fecharModalEditar(){
  fundoEditar.style.display= 'none';
  modalEditar.style.display= 'none';
}
//modal dados/excluir cadastro
let modalDados= document.querySelector('#modalDados');
let fundoExcluir= document.querySelector('#fundoExcluir');
async function openModalDados(idPaciente){

  const paciente= await obterPacienteId(idPaciente);

  document.querySelector('#sexo1').value=paciente.Sexo
  document.querySelector('#civil1').value=paciente.EstadoCivil
  document.querySelector('#nacionalidade1').value=paciente.Nacionalidade
  document.querySelector('#nome1').value=paciente.Nome
  document.querySelector('#cpf1').value=paciente.CPF
  document.querySelector('#email1').value=paciente.Email
  document.querySelector('#nascimento1').value=paciente.DataDeNascimento
  document.querySelector('#naturalidade1').value=paciente.Naturalidade
  document.querySelector('#profissao1').value=paciente.Profissao
  document.querySelector('#escolaridade1').value=paciente.Escolaridade
  document.querySelector('#mae1').value=paciente.Mae
  document.querySelector('#pai1').value=paciente.Pai
  fundoExcluir.style.display= 'block';
  modalDados.style.display = 'block';

  //função delete
 const excluirDados = document.querySelector('.excluir') 
 excluirDados.addEventListener('click',async()=>{
  await deletarPaciente(idPaciente);
  fecharModalDados();
  await imprimirListaDePacientes()

 
 })
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


// modal do usuario na pag prontuario2
let dadosUsuario= document.querySelector('.dadosUsuario')
let pointer=document.querySelector('.pointer')
pointer.addEventListener('click',()=>{
dadosUsuario.style.display='block';
dadosUsuario.addEventListener('click',()=>{
  dadosUsuario.style.display='none';
});

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
const obterPacienteId= async (idPaciente)=>{
  const apiResponse = await fetch(`${urlPacientes}/${idPaciente}`);
  const pacienteJson= await apiResponse.json();
  return pacienteJson
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
await imprimirListaDePacientes();
// fecharModal();

openModalCheck();


});

const editarPaciente = async (idPaciente,pacienteEditado) => {
  await fetch(`${urlPacientes}/${idPaciente}`,{  
    method: "PUT",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
   body: JSON.stringify(pacienteEditado)
  });
}

const deletarPaciente= async (idPaciente) => {
  await fetch(`${urlPacientes}/${idPaciente}`,{
    method: "DELETE"
  }
  )

}
const imprimirPaciente= (paciente)=>{
 let conteudoTabela = document.querySelector('#conteudoTabela')
conteudoTabela.innerHTML=conteudoTabela.innerHTML +
` <div class="linha d-flex ">
<div class="cod text-center bordagray2 p-1">${paciente.id}</div>
<div class="nome  bordagray2 p-1">${paciente.Nome}</div>
<div class="cpf bordagray2  p-1">${paciente.CPF}</div>
<div class="acoes bordagray2  d-flex justify-content-center align-items-center">
<a href="Prontuario.html"> <img src="prontuario.png" type="submit">  </a>
    <img src="editar.png"  type="submit" id="editar"onclick="openModalEditar(${paciente.id})">
    <img src="lixeira.png" type="submit" class=""onclick="openModalDados(${paciente.id})">
</div>  

</div> `
}
const imprimirListaDePacientes= async ()=>{
  const vetorPacientes= await visualizarPacientes()
  conteudoTabela.innerHTML=''
  vetorPacientes.forEach(elemento=> {
    imprimirPaciente(elemento)
  });
}


