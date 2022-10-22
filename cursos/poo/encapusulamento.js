class poligono {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  };

  get area() {
    return this.#calcularArea();
  };

  #calcularArea() {
    return this.altura * this.largura;
  };

};

let Poligono = new poligono(50, 60);

console.log(Poligono.area);

