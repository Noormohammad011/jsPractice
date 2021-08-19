const generate = document.querySelector('.generate')
const num = document.querySelector('.number')

const generateNumber = () => {
    // const x = Math.round(Math.random() * 10)
    const x = Math.floor(Math.random()*10 +1)
    
  num.innerHTML = x
}

generate.addEventListener('click', generateNumber)
