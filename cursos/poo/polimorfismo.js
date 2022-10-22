
// Herança normal
class Atleta {
  peso;
  categoria;

  constructor(peso) {
    this.peso = peso;
  }

  definirCategoria() {
    if(this.peso <= 50) {
      this.categoria = "infantil";
    } else if (this.categoria <= 70) {
      this.categoria = "juvenil";
    } else {
      this.categoria = "adulto"
    }
  }
}

// Polimorfismo
class Lutador extends Atleta {
  constructor(peso) {
    super(peso)
  }

  definirCategoria() {
    if(this.peso <= 55) {
      this.categoria = "pluma";
    } else if (this.categoria <= 60) {
      this.categoria = "leve";
    }else if(this.peso <= 70) {
      this.categoria = "meio-pesado";
    } else {
      this.categoria = "pesado";
    }
  }
}