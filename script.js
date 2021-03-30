document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)


function  validaFormulario(){  
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""){//faz referencia a um elemnto no html
    alert("Prontinho! Você receberá as novidades por email.")
  } else{
    alert("Preencha os campos de nome e email, por favor!")
  }
}

document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

//https://github.com/Thainahelena/euprogramo-programaria/tree/main/euprogramo


