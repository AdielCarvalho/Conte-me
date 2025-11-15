window.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('palavra');
  const btn = document.getElementById('contar');
  const resultado = document.getElementById('resultado');

  btn.addEventListener('click', () => {
    const palavra = input.value.trim().toLowerCase();

    if (palavra === '') {
      resultado.textContent = 'Digite uma palavra!';
      return;
    }

    // Remove tudo que não é letra
    const letras = palavra.replace(/[^a-záéíóúãõâêôç]/gi, '');
    const vogais = letras.match(/[aeiouáéíóúãõâêô]/gi) || [];
    const consoantes = letras.match(/[^aeiouáéíóúãõâêô]/gi) || [];

    // Verifica condições especiais
    let mensagemExtra = '';

    // A. Menos de 3 letras
    if (letras.length < 3) {
      mensagemExtra = 'Palavra muito curta.';
    }

    // B. Mais de 3 vogais
    else if (vogais.length > 3) {
      mensagemExtra = 'Palavras com muitas vogais.';
    }

    // C. Palíndromo
    else {
      const invertida = letras.split('').reverse().join('');
      if (letras === invertida) {
        mensagemExtra = 'Essa palavra é um palíndromo!';
      }
    }

    // Exibe o resultado
    resultado.innerHTML = `
      <p>Total de letras: <strong>${letras.length}</strong></p>
      <p>Vogais: <strong>${vogais.length}</strong></p>
      <p>Consoantes: <strong>${consoantes.length}</strong></p>
      ${mensagemExtra ? `<p style="margin-top:10px; color:#2c3e50;"><em>${mensagemExtra}</em></p>` : ''}
    `;
  });
});
