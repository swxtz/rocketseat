const questions = [
  "Qual seu Nome?",
  "O que aprendi hoje?",
  "O que me deixou aborrecido?",
  "O que eu poderia fazer para melhorar",
  "O que me deixaria melhor hj?",
  "Quantas pessoas ajudei hj?",
]
process.stdout.write(`Escreva "exit" para sair` + "\n")

const ask = ( index = 0) => {
  process.stdout.write(questions[index] + " > ")
}

ask(0)


const answers = []
process.stdout.on("data", data => {
  answers.push( data.toString().trim())

  if(answers.length < questions.length) {
    ask(answers.length)
  }
  if(answers.length >= questions.length) {
    process.stdout.write(`Escreva "show" para mostrar as respostas` + "\n")
  }

  if(data.toString().trim() == "exit") {
    process.exit()
    showAnswers()
  }
  if(data.toString().trim() == "show") {
    showAnswers()
  }
})

function showAnswers() {
  console.log(`
    Banaca, ${answers[0]}

    O que aprendi hoje?
    ${answers[1]}

    O que me deixou aborrecido?
    ${answers[2]}

    O que eu poderia fazer para melhorar
    ${answers[3]}

    O que me deixaria melhor hj?
    ${answers[4]}

    Quantas pessoas ajudei hj?
    ${answers[5]}

    Escreva "exit" para sair
  `)
}
