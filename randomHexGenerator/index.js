const hex = document.querySelector('.hex')
const btn = document.querySelector('.generate')


btn.addEventListener('click', (e) => {
  e.preventDefault()
  const randomColor = Math.random().toString(16).substring(2, 8)
  document.body.style.backgroundColor = '#' + randomColor
  hex.innerHTML = '#' + randomColor
})
