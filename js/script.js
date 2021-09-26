// INÍCIO DO ARQUIVO DE SCRIPT

// Funções De uso Global

const typeWriter = (element) => {
  // Função que Imprime no seu bloco paractere por caractere, nele contido originalmente
  const arrayText = element.innerHTML.split(''); // Separa caractere por caractere em um array
  element.innerHTML = ''; // Limpa bloco contendo o Texto
  arrayText
  .forEach((word, i) => setTimeout(() => element.innerHTML += word, 70 * i));
};

const paragrafoIntro = document.querySelector('#paragrafo-intro');
typeWriter(paragrafoIntro);
