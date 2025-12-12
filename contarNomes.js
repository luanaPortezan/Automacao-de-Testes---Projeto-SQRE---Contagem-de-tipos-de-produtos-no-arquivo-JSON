const fs = require('fs');

// Carrega o arquivo JSON
const data = JSON.parse(fs.readFileSync('C:/Users/re047902/VscProjects/testeDaSprint7/Amostra_30_07_2025_821_teste-1.json', 'utf8'));
const contagem = {};

// Percorre os pedidos 
data.pedidos.forEach(pedido => {
  if (pedido.listaProdutos) {
    pedido.listaProdutos.forEach(produto => {
      const nome = produto.nome;
      if (nome) {
        contagem[nome] = (contagem[nome] || 0) + 1; 
      }
    });
  }
});

// Exibe os resultados
console.log("Contagem de valores únicos da chave 'nome':");
Object.entries(contagem).forEach(([nome, qtd]) => {
  console.log(`- ${nome}: ${qtd}`);
});

console.log(`\nTotal de produtos: ${Object.values(contagem).reduce((a, b) => a + b, 0)}`);