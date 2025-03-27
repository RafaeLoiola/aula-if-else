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
console.log('1) media semestre: '+ media)

if (media < 5 ) {
	console.log ('reprovado');
   
}else if (media >=5 && media <= 7){
	console.log ('recuperação')
} else {
	console.log ('passou semestre')
}
// 2) O IMC - Indice de Massa Corporal é um criterio da Organização Mundial de Saude para dar uma indicação sobre a condição de peso de uma pessoa adulta.

// Formula do IMC:
// IMC = peso / ( altura * altura)

// Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

// IMC em adultos Condição :	
// - Abaixo de 18.5, Abaixo do Peso ;
// - Entre 18.5 e 25, Peso Normal;
// - Entre 25 e 30,  Acima do Peso;
// - Entre 30 e 40, Obeso;
// - Acima de 40 Obesidade Grave;
const peso = 150;
const altura = 1.83;
const imc = peso / Math.pow(altura,2);
console.log ('2) IMC:'+ imc.toFixed(2))

if (imc < 18.5){
	console.log ('Condição:abaixo do peso');
} else if (imc >= 18.5 && imc < 25 ){
	console.log ('Condição:Peso Normal');
}else if (imc >=25 && imc < 30 ){
	console.log ('Condição:acima do Peso');
}else if (imc >= 30 && imc < 40){
	console.log ('Obeso');
} else {
	console.log ('Condição:Obesidade Grave')
}