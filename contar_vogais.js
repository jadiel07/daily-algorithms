/**
 * Conta quantas vogais existem em uma palavra.
 *
 * @param {string} word - Palavra que será analisada.
 * @returns {number} Quantidade de vogais encontradas.
 */
function countVowels(word) {
  // Armazena todas as vogais
  const vowels = "aeiou";

  // Contador de vogais
  let count = 0;

  // Percorre cada letra da palavra
  for (let i = 0; i < word.length; i++) {

    // Verifica se a letra atual está entre as vogais
    if (vowels.includes(word[i].toLowerCase())) {
      count++;
    }
  }

  // Retorna a quantidade de vogais encontradas
  return count;
}

const word = "javascript";

console.log(countVowels(word)); // 3