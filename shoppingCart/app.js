const updateProductNumber = (product, price, isIncrease) => {
  const productInput = document.getElementById(product + '-number')
  let productNumber = productInput.value
  //get input value
  if (isIncrease == true) {
    productNumber = parseInt(productInput.value) + 1
  } else if (productNumber > 0) {
    productNumber = parseInt(productInput.value) - 1
  }
  productInput.value = productNumber
  const productTotal = document.getElementById(product + '-total')
  productTotal.innerText = productNumber * price
  calculteTotal()
}

const getInputValue = (product) => {
  const productInput = document.getElementById(product + '-number')
  const productNumber = parseInt(productInput.value)
  return productNumber
}
const calculteTotal = () => {
  const phoneTotal = getInputValue('phone') * 1219
  const caseTotal = getInputValue('case') * 59
  const subTotal = phoneTotal + caseTotal
  const tax = subTotal / 10
  const totalPrice = subTotal + tax
  // update on the html
  document.getElementById('sub-total').innerText = subTotal
  document.getElementById('tax-amount').innerText = tax
  document.getElementById('total-price').innerText = totalPrice
}

//casePlus
const casePlus = document
  .getElementById('case-plus')
  .addEventListener('click', (e) => {
    e.preventDefault()
    updateProductNumber('case', 59, true)
  })

//caseMinus
const caseMinus = document
  .getElementById('case-minus')
  .addEventListener('click', (e) => {
    e.preventDefault()
    updateProductNumber('case', 59, false)
  })

//phonePlus
const phonePlus = document
  .getElementById('phone-plus')
  .addEventListener('click', (e) => {
    e.preventDefault()
    updateProductNumber('phone', 1219, true)
  })
//phoneMinus
const phoneMinus = document
  .getElementById('phone-minus')
  .addEventListener('click', (e) => {
    e.preventDefault()
    updateProductNumber('phone', 1219, false)
  })
