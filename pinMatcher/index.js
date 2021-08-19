const generatePin = document.querySelector('.generate-btn')
const key = document.querySelector('#key-pad')
const typedNumber = document.querySelector('#typed-numbers')
const pinMatch = document.querySelector('.submit-btn')
const getPin = () => {
  const pin = Math.round(Math.random() * 10000)
  const pinString = pin + ''
  if (pinString.length == 4) {
    return pin
  } else {
    return getPin()
  }
}

generatePin.addEventListener('click', (e) => {
  e.preventDefault()
  const pin = getPin()
  document.getElementById('display-pin').value = pin
})

key.addEventListener('click', (e) => {
  e.preventDefault()
    const number = e.target.innerText
    if (isNaN(number)) {
        if (number == 'C') {
            typedNumber.value = ''
        }
    } else {
         const previousNumber = typedNumber.value
         const newNumber = previousNumber + number
         typedNumber.value = newNumber
    }
 
})

pinMatch.addEventListener('click',(e)=>{
    const pin = document.getElementById('display-pin').value
    const typed = typedNumber.value
     const successMessage = document.getElementById('notify-success')
     const failError = document.getElementById('notify-fail')
    if (pin == typed) {
        successMessage.style.display = 'block'
        failError.style.display = 'none'
    } else {
        successMessage.style.display = 'none'
        failError.style.display = 'block'
    }
});
