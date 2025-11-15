function normalizarUsuarios(json) {
  const usuarios = JSON.parse(json);

  return usuarios.map(usuario => {
    
    const nomeNormalizado = usuario.nome
      .trim()
      .split(/\s+/)
      .map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
      .join(" ");

    const emailNormalizado = usuario.email.toLowerCase();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalizado);

    const idade = Number(usuario.idade);
    const maiorDeIdade = idade >= 18;

    return {
      nome: nomeNormalizado,
      email: emailNormalizado,
      emailValido,
      idade,
      maiorDeIdade
    };
  });
}
const usuariosJSON = `[
 {"nome": " carlos silva ", "email": "CARLOS@EMAIL.COM", "idade": "25"},
 {"nome": "MARIA", "email": "maria@email.com", "idade": "30"},
 {"nome": "João Santos", "email": "joao@email.com", "idade": "17"}
]`;

console.log(normalizarUsuarios(usuariosJSON));
