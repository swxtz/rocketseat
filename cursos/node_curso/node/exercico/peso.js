const questions = ['Qual seu nome?', 'Qual seu peso?']
process.stdout.write(`Escreva "exit" para sair` + '\n')

const ask = (index = 0) => {
  process.stdout.write(questions[index] + ' > ')
}

ask(0)

const answers = []
process.stdout.on('data', data => {
  answers.push(data.toString().trim())

  if (answers.length < questions.length) {
    ask(answers.length)
  }
  if (answers.length >= questions.length) {
    showAnswers()
  }

  if (data.toString().trim() == 'exit') {
    process.exit()
  }
  if (data.toString().trim() == 'show') {
    showAnswers()
  }
})

function showAnswers() {
  console.log(`
    Foda!! ${answers[0]}

    Seu peso é: ${answers[1]}

    Escreva "exit" para sair
  `)
}
