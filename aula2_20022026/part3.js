let produtos = [
  { nome: 'Notebook', preco: 3500, estoque: 10 },
  { nome: 'Mouse', preco: 80, estoque: 50 },
  { nome: 'Teclado', preco: 150, estoque: 30 },
  { nome: 'Monitor', preco: 900, estoque: 15 },
  { nome: 'Impressora', preco: 700, estoque: 8 },
  { nome: 'Cadeira', preco: 600, estoque: 20 },
  { nome: 'Mesa', preco: 1200, estoque: 5 },
  { nome: 'HD Externo', preco: 400, estoque: 25 },
  { nome: 'Pendrive', preco: 60, estoque: 100 },
  { nome: 'Webcam', preco: 250, estoque: 18 }
];

console.log("Preço do segundo objeto:", produtos[1].preco);

console.log("Nome do terceiro objeto:", produtos[2].nome);

console.log("Total de itens:", produtos.length);

for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome);
}

let totalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].estoque;
}

console.log("Total de estoque:", totalEstoque);

let maiorEstoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = produtos[i];
  }
}

console.log("Produto com maior estoque:", maiorEstoque);