function analisarTexto(texto) {
  const palavras = texto
    .toLowerCase()
    .replace(/[.,!?;:]/g, "")   // remove pontuação
    .split(/\s+/);               // separa por espaço

  const totalPalavras = palavras.length;

  const mapaFrequencia = {};

  palavras.forEach(p => {
    mapaFrequencia[p] = (mapaFrequencia[p] || 0) + 1;
  });

  const frequenciaPalavras = Object.keys(mapaFrequencia).map(p => ({
    palavra: p,
    frequencia: mapaFrequencia[p]
  }));

  const totalCaracteres = palavras.reduce((acc, p) => acc + p.length, 0);
  const tamanhoMedioPalavras = totalCaracteres / totalPalavras;

  return {
    totalPalavras,
    frequenciaPalavras,
    tamanhoMedioPalavras: Number(tamanhoMedioPalavras.toFixed(2))
  };
}

const texto = "JavaScript é uma linguagem de programação. JavaScript é versátil e JavaScript é poderoso.";

console.log(analisarTexto(texto));
