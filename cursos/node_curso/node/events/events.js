const EventEmitter = require('events')
const events = require('events')

const ev = new EventEmitter()

ev.on("Falando algo", (e) => {
  console.log("Eu ouvi")
})

ev.emit("Falando algo")
ev.emit("Falando algo")


