const precoEtanol =3;
const precoGasolina = 5.69;
const kmPorLitros =15;
const distanciaKm =1534;
const tipoCombustivel = 'Etanol';
console.log ('Na minha viagem preciso economizar no combustivel, qual seria o melhor?')
const litrosConsumidos = distanciaKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
	 const valorGasto = litrosConsumidos * precoEtanol;
console.log ('combustivel mais em conta é o Etanol:R$'+valorGasto.toFixed(2));
}else {
	 const valorGasto = litrosConsumidos * precoGasolina;
console.log ('combustivel mais em conta é a Gasolina:R$'+ valorGasto.toFixed(2));
}
// 1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua clasificação conforme a tabela abaixo.
// media = (nota 1 + nota 2 + nota 3) / 3;

// classificação:
// - media menor que 5, reprovado;
// - media entre 5 e 7, recuperação;
// - media acima de 7, passou de semestre;

const nota1 = 3;
const nota2 = 9;
const nota3 = 9;
const media = (nota1 + nota2 + nota3) /3;
console.log('media semestre: '+ media)

if (media < 5 ) {
	console.log ('reprovado');
   
}else if (media >=5 && media <= 7){
	console.log ('recuperação')
} else {
	console.log ('passou semestre')
}
