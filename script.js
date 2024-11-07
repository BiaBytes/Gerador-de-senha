// Selecionando os elementos do DOM
let sliderElement = document.querySelector("#slider");
let sizePassword = document.querySelector("#valor");
let passwordElement = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

// Charset para a senha (letras, números e símbolos especiais)
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!";
let novaSenha = "";

// Atualiza o valor do tamanho da senha à medida que o slider é movido
sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
  sizePassword.innerHTML = this.value; // Atualiza o valor mostrado ao lado do slider
};

// Função para gerar a senha com o tamanho especificado
function generatePassword() {
  let pass = "";
  let tamanho = parseInt(sliderElement.value); // Converte o valor do slider para número
  
  // Gerar a senha com o tamanho escolhido
  for (let i = 0; i < tamanho; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * charset.length)); // Adiciona caracteres aleatórios à senha
  }

  // Exibe o container de senha e a senha gerada
  containerPassword.classList.remove("hide");
  passwordElement.textContent = pass; // Exibe a senha no HTML
  novaSenha = pass; // Armazena a senha gerada
}

// Adiciona o evento de click ao botão para gerar a senha
document.querySelector("#button").onclick = generatePassword;

// Função para copiar a senha para a área de transferência
function copyPassword() {
  navigator.clipboard.writeText(novaSenha)  // Corrigido para writeText
    .then(() => {
      alert("Senha copiada com sucesso!"); // Exibe mensagem de sucesso
    })
    .catch((error) => {
      alert("Erro ao copiar a senha: " + error); // Exibe mensagem de erro
    });
}

// Adiciona o evento de clique na senha para copiar ao clicar nela
passwordElement.addEventListener("click", copyPassword);