const queryString = "categoria=eletronicos&preco=500,00&marca=samsung&avaliacao=4.5";

function parseQueryString(query) {
  const obj = {};

  // Divide pelos parâmetros
  const params = query.split("&");

  for (let p of params) {
    let [key, value] = p.split("=");

  
    if (!isNaN(value) && value.trim() !== "") {
      value = Number(value);
    }

    obj[key] = value;
  }

  return obj;
}

console.log(parseQueryString(queryString));
