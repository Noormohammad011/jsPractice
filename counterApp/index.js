const count = document.querySelector('.count')
// const add = document.querySelector('.add')
// const resetCount = document.querySelector('.reset')
// const sub = document.querySelector('.subtract')
const buttons = document.querySelector('.buttons')




// event delegation
// first parent -> inside children element 
buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('add')) {
        count.innerHTML++
        setColor()
    }
    if (e.target.classList.contains('subtract')) {
        count.innerHTML--
        setColor()
    }
    if (e.target.classList.contains('reset')) {
        count.innerHTML = 0
        setColor()
    }
    
});



const setColor = () => {
     if (count.innerHTML > 0) {
       count.style.color = 'yellow'
     } else if (count.innerHTML < 0) {
       count.style.color = 'orangered'
     } else {
       count.style.color = '#fff'
     }
}


// add.addEventListener('click', (e) => {
//   e.preventDefault()
//   count.innerHTML++
// })

// sub.addEventListener('click', (e) => {
//   e.preventDefault()
//   count.innerHTML--
// })
// resetCount.addEventListener('click', (e) => {
//   e.preventDefault()
//   count.innerHTML = 0
// })
