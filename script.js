const $userInput = document.getElementById('number')
const $convertButton = document.getElementById('convert-btn')
const $outputMsg = document.getElementById('output')

const romanNumbers = [
  { value: 1000, symbol: 'M' },
  { value: 900, symbol: 'CM' },
  { value: 500, symbol: 'D' },
  { value: 400, symbol: 'CD' },
  { value: 100, symbol: 'C' },
  { value: 90, symbol: 'XC' },
  { value: 50, symbol: 'L' },
  { value: 40, symbol: 'XL' },
  { value: 10, symbol: 'X' },
  { value: 9, symbol: 'IX' },
  { value: 5, symbol: 'V' },
  { value: 4, symbol: 'IV' },
  { value: 1, symbol: 'I' }
]

const naturalToRoman = (number) => {
  let result = ''

  for (const romanNumber of romanNumbers) {
    while (number >= romanNumber.value) {
      result += romanNumber.symbol
      number -= romanNumber.value
    }
  }
  return result
}

const convertNumber = () => {
  const number = $userInput.value

  // mensaje en caso de que el usuario no haya ingresado ningún numero
  if (!number) {
    $outputMsg.textContent = 'Please enter a valid number'

    // mensaje en caso de que el usuario ingrese un numero menor a 1
  } else if (number < 1) {
    $outputMsg.textContent = 'Please enter a number greater than or equal to 1'

    // mensaje en caso de que el usuario ingrese un numero mayor a 3999
  } else if (number > 3999) {
    $outputMsg.textContent = 'Please enter a number less than or equal to 3999'

    //return
  } else {
    $outputMsg.textContent = naturalToRoman(number)
  }
}

// events
$convertButton.addEventListener('click', convertNumber)

$userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    convertNumber()
  }
})
