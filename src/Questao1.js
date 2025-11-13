function formatarProdutos(produtosJSON) {
  const obj = JSON.parse(produtosJSON);

  const resultado = [];

  obj.itens.forEach(item => {
    const texto = `${item.nome} - R$ ${item.preco.toFixed(2)} (Categoria: ${item.categoria})`;
    resultado.push(texto);
  });

  return resultado;
}

const produtosJSON = `{
 "itens": [
   {
     "id": 1,
     "nome": "Notebook Gamer",
     "preco": 2999.99,
     "categoria": "eletronicos",
     "tags": ["tecnologia", "computacao", "gamer"]
   },
   {
     "id": 2, 
     "nome": "Mesa Escritório",
     "preco": 450.50,
     "categoria": "moveis",
     "tags": ["escritorio", "madeira", "profissional"]
   }
 ]
}`;

const resultado = formatarProdutos(produtosJSON);

console.log(resultado); //saida = 'Notebook Gamer - R$ 2999.99 (Categoria: eletronicos)', 'Mesa Escritório - R$ 450.50 (Categoria: moveis)'.

