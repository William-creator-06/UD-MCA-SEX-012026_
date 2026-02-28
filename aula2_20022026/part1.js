let frutas = [
  'Maçã', 'Banana', 'Uva', 'Laranja', 'Abacaxi',
  'Melancia', 'Manga', 'Pera', 'Kiwi', 'Morango',
  'Limão', 'Cereja', 'Ameixa', 'Mamão', 'Goiaba',
  'Maracujá', 'Coco', 'Caqui', 'Jabuticaba', 'Figo',
  'Pitaya'
];

console.log("Posição 0:", frutas[0]);
console.log("Posição 7:", frutas[7]);
console.log("Posição 11:", frutas[11]);
console.log("Posição 15:", frutas[15]);
console.log("Posição 18:", frutas[18]);
console.log("Posição 20:", frutas[20]);

console.log("Penúltimo:", frutas[frutas.length - 2]);
console.log("Último:", frutas[frutas.length - 1]);

console.log("Total de elementos:", frutas.length);

frutas.push("Framboesa");
console.log("Novo array:", frutas);

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}