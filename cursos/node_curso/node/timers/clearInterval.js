const timeOut = 1000
const checking = () => {
  console.log("checando")
}
let interval = setInterval(checking, timeOut)
clearInterval(() => interval, 4000)