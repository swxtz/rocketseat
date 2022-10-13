const pilotos = ["Senna", "Prost", "Schumacher", "Hamilton"]

//Index do array
console.log(pilotos[0])

//um Loop de repetição para cada piloto
for(let piloto of pilotos) {
  console.log(piloto)
}

//Adicionar novos pilotos no array
pilotos.push("Afonso")

//Verificar se 
const senna = pilotos.find(piloto => piloto === "Senna")
console.log(senna)
