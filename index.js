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
//3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

// Condigo Condição de Pagamento:
// 1- Á vista Debito, recebe 10% de desconto;
// 2- Á vista no Dinheiro ou Pix, recebe 15% de desconto;
// 3- Em duas vezes, preço normal de etiqueta sem juros; 
// 4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
const produto = 'camiseta'
const precoEtiqueta = 100;
const formaDePagamento = 4;
 console.log ('4)',produto,'R$',precoEtiqueta)
 if (formaDePagamento === 1 ){
 	console.log ('no debito 10% de desconto:R$'+( precoEtiqueta - (precoEtiqueta*0.1)))
 } else if(formaDePagamento === 2 ){
	console.log ('no dinheiro ou pix 15% de desconto:R$'+( precoEtiqueta - (precoEtiqueta*0.15)))
} else if (formaDePagamento === 3 ){
	console.log ('Em duas vezes:2x R$'+( precoEtiqueta /2))
} else if (formaDePagamento === 4 ) {
	console.log('Acima de 2 vezes 10% de juros:R$'+( precoEtiqueta + (precoEtiqueta*0.1)))
}