const word = document.querySelector('.input-text')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', countVowel)

function countVowel() {
  let vowelCount = 0
  let wordVal = word.value.toLowerCase()

  for (const letter of wordVal) {
    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount++
    }
  }

  result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`
}
