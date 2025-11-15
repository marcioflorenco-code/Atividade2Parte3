function sanitizarDados(dados) {
  const copia = JSON.parse(JSON.stringify(dados));

   copia.usuarios = copia.usuarios.map(u => {
    
    const cpfFinal = u.cpf.slice(-2);
    u.cpf = `***.***.***-${cpfFinal}`;

    const cartaoFinal = u.cartaoCredito.slice(-4);
    u.cartaoCredito = `****-****-****-${cartaoFinal}`;

    const ddd = u.telefone.slice(1, 3);
    const telFinal = u.telefone.slice(-4);
    u.telefone = `(${ddd}) *****-${telFinal}`;

    return u;
  });

  const tokenOriginal = copia.metadata.token;
  copia.metadata.token = tokenOriginal.slice(0, 10) + "...";

  return copia;
}
const dadosSensiveis = {
  usuarios: [
    {
      cpf: "123.456.789-00",
      cartaoCredito: "5555-6666-7777-8888",
      telefone: "(11) 99999-9999",
      nome: "Fulano de Tal"
    }
  ],
  metadata: {
    ip: "192.168.1.100",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  }
};

console.log(sanitizarDados(dadosSensiveis));
