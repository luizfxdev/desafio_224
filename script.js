// Elementos do DOM
const magicWordsInput = document.getElementById('magicWords');
const decipherBtn = document.getElementById('decipherBtn');
const returnBtn = document.getElementById('returnBtn');
const resultOutput = document.getElementById('resultOutput');
const calculationSteps = document.getElementById('calculationSteps');

// Função para decifrar o heptagrama mágico
function decipherMagicWords() {
  // Obter o valor do input e remover espaços em branco extras
  const inputValue = magicWordsInput.value.trim();

  // Verificar se o input está vazio
  if (!inputValue) {
    resultOutput.textContent = 'Por favor, insira palavras mágicas!';
    calculationSteps.textContent = '';
    return;
  }

  // Dividir as palavras pela vírgula e remover espaços em branco
  const wordsArray = inputValue.split(',').map(word => word.trim());

  // Criar os passos do cálculo para exibição
  let steps = 'Passos da Magia:\n';
  steps += `1. Palavras originais: [${wordsArray.join(', ')}]\n`;

  // Converter todas as palavras para minúsculas
  const lowerCaseWords = wordsArray.map(word => word.toLowerCase());
  steps += `2. Convertido para minúsculas: [${lowerCaseWords.join(', ')}]\n`;

  // Juntar as palavras com hífen
  const magicResult = lowerCaseWords.join('-');
  steps += `3. Unidas com hífen: ${magicResult}\n`;

  // Exibir o resultado e os passos
  resultOutput.textContent = magicResult;
  calculationSteps.textContent = steps;

  // Adicionar animação ao resultado
  resultOutput.style.animation = 'glow 2s';
  setTimeout(() => {
    resultOutput.style.animation = '';
  }, 2000);
}

// Função para limpar os campos
function returnToDefault() {
  magicWordsInput.value = '';
  resultOutput.textContent = '';
  calculationSteps.textContent = '';
  magicWordsInput.focus();
}

// Event Listeners
decipherBtn.addEventListener('click', decipherMagicWords);
returnBtn.addEventListener('click', returnToDefault);

// Permitir usar Enter para decifrar
magicWordsInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    decipherMagicWords();
  }
});

// Adicionar estilo de animação para o resultado
const style = document.createElement('style');
style.textContent = `
    @keyframes glow {
        0% { box-shadow: 0 0 5px #ff0044; }
        50% { box-shadow: 0 0 20px #ff0044; }
        100% { box-shadow: 0 0 5px #ff0044; }
    }
`;
document.head.appendChild(style);
