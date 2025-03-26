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
