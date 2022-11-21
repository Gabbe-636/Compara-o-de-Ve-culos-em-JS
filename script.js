/* 1- Crie uma classe para representar carros.
Os carros possuem uma MARCA, uma COR, e um GASTO MÉDIO de combustível por KM rodado.

Crie um método que dado a quantidade de KM e o preço do combustível nos dê o valor do gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  modelo;
  cor;
  mediakm;

  constructor(marca, cor, mediakm) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.mediakm = mediakm;
  }
  gastokm(distancia, preco) {
    return distancia * this.mediakm * preco;
  }
}
const uno = new Carro("Fiat", "UNO", "Prata", 1 / 12);
console.log(uno.gastokm(70, 5));
const fit = new Carro("Honda", "FIT", "Vermelho", 1 / 15);
console.log(fit.gastokm(70, 5));
const opala = new Carro("Chevrolet", "OPALA", "Vinho", 1 / 3);
console.log(opala.gastokm(70, 5));
