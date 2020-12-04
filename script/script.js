let str = ''
let arr = []
let word1 = ''
let word2 = ''
let minDistance = -1
let maxDistance = -1
let index1 = -1
let index2 = -1
const $btnMin = document.querySelector('.compute-min')
const $btnMax = document.querySelector('.compute-max')
const $textOutput = document.querySelector('.text-output')

function general() {
  str = document.querySelector('.textarea').value.trim()
  arr = str.split(/,\s|\s/)
  word1 = document.querySelector('.input-1').value.trim()
  word2 = document.querySelector('.input-2').value.trim()
  $textOutput.innerHTML = ''
}

$btnMin.addEventListener('click', () => {
  general()

  for (let x = 0; x < arr.length; x++) {
    if (arr[x].toLowerCase() == word1.toLowerCase()) {
      index1 = x
    }

    if (arr[x].toLowerCase() == word2.toLowerCase()) {
      index2 = x
    }

    if (index1 !== -1 && index2 !== -1) {
      let distance = Math.abs(index1 - index2)

      if (minDistance === -1 || minDistance > distance) {
        minDistance = distance - 1
      }
    }
  }

  // Проверка на пустые инпуты
  if (!(word1 && word2)) {
    return ($textOutput.innerHTML = `Оба поля ввода должны быть заполнены!`)
  }

  //Проверка на наличие слова в массиве
  if (minDistance === -1) {
    return ($textOutput.innerHTML = `Этого слова в тексте нет или вы ввели одно и тоже слово!`)
  }

  $textOutput.innerHTML = `Минимальное расстояние между словом ${word1} и словом ${word2}: ${minDistance} слов(а)`
})

$btnMax.addEventListener('click', () => {
  general()

  for (let x = 0; x < arr.length; x++) {
    if (arr[x].toLowerCase() === word1.toLowerCase()) {
      index1 = x
    }

    if (arr[x].toLowerCase() === word2.toLowerCase()) {
      index2 = x
    }

    if (index1 !== -1 && index2 !== -1) {
      let distance = Math.abs(index1 - index2)
      console.log('distance: ', distance)

      if (maxDistance === -1 || maxDistance < distance) {
        maxDistance = distance - 1
      }
    }
  }

  // Проверка на пустые инпуты
  if (!(word1 && word2)) {
    return ($textOutput.innerHTML = `Оба поля ввода должны быть заполнены!`)
  }

  //Проверка на наличие слова в массиве
  if (maxDistance === -1) {
    return ($textOutput.innerHTML = `Этого слова в тексте нет или вы ввели одно и тоже слово!`)
  }

  $textOutput.innerHTML = `Максимальное расстояние между словом ${word1} и словом ${word2}: ${maxDistance} слов(а)`
})
