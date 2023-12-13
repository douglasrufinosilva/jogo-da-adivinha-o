const tryBtn = document.getElementById('try-btn')
const againBtn = document.getElementById('again-btn')
const inputNumber = document.getElementById('input-number')
const errorMessage = document.getElementById('error-message')
const attemptsWin = document.querySelector('.attempts-win')

let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

tryBtn.addEventListener('click', handleTryClick)
againBtn.addEventListener('click', handleResetClick)

function handleTryClick(event) {
  event.preventDefault()
  
  if(Number(inputNumber.value) == randomNumber) {
    document.querySelector('.screen1').classList.add('hide')
    document.querySelector('.screen2').classList.remove('hide')

    inputNumber.value = ''

    if(attempts <= 1) {
      attemptsWin.innerText = `Você adivinhou o número em ${attempts} tentativa.`
    } else {
      attemptsWin.innerText = `Você adivinhou o número em ${attempts} tentativas.`
    } 
  } else if (inputNumber.value == '') {
    attempts = 0
    errorMessage.innerText = `Insira um número`
    errorMessage.style.color = 'red'
    console.log('aqui')
  } else {
    inputNumber.value = ''
    errorMessage.innerText = `Tente novamente! Erros: ${attempts}`
    errorMessage.style.color = 'red'
  }

  attempts++
}

function handleResetClick() {
  console.log('aqui')
  document.querySelector('.screen2').classList.add('hide')
  document.querySelector('.screen1').classList.remove('hide')

  errorMessage.innerText = ''
  attempts = 1

  randomNumber = Math.round(Math.random() * 2)
}