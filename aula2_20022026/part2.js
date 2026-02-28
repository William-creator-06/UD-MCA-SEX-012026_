let produto = {
  nome: 'Camisa',
  cor: 'Preta',
  preco: 79.90,
  estoque: 50
};

console.log(produto.nome);

console.log(produto['preco']);

produto.estoque = 80;
console.log("Novo estoque:", produto.estoque);

for (let chave in produto) {
  console.log(chave + ": " + produto[chave]);
}