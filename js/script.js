// AOS.init();
let doc = document

let main__form = doc.forms.main__form // Обращаемся к самой 'form' с помощью атрибута 'name'
let svg__color = doc.querySelector('svg')
let style__inputs = doc.querySelectorAll('input')
let input__color = doc.main__form.color
let input__range = doc.main__form.range
let input__range__p = doc.querySelector('.input__range__p')

input__color.addEventListener('input', () => {
    svg__color.style.color = input__color.value
})

input__range.addEventListener('input', () => {
    if (input__range.value > 50) {
        input__range__p.style.color = 'red';
        input__range__p.style.textAlign = 'left';
        input__range__p.textContent = 'Reds win!'
    }
    else if (input__range.value < 50) {
        input__range__p.style.color = 'blue';
        input__range__p.style.textAlign = 'right';
        input__range__p.textContent = 'Blues win!'
    }
})

main__form.addEventListener('submit', (event) => {
    event.preventDefault()
    let form__data = {} // Создаем пустой объект
    let inputs = doc.querySelectorAll('.inputs') // Обращаемся ко всем инпутам которые имеют значение в виде текста
    let input__checkbox = doc.querySelector(['input[type="checkbox"]']) // Обращаемся с помощью атрибута текст к инпуту checkbox
    let input__select = doc.querySelector('select') // Обращаемся к инпуту select
    let input__comment = doc.querySelector('textarea') // Обращаемся к инпуту textarea
    for (let item of inputs) { // Создаем цикл for of для inputs
        let { name, value } = item // Создаем две переменные name и value которые равны item
        form__data[name] = value 
        form__data.check = input__checkbox.checked // Создаем новый ключ check в form__data и указываем input__checkbox.checked то есть отмечен
        form__data.select = input__select.value // Создаем новый ключ select в form__data и указываем input__select.value
        form__data.comment = input__comment.value // Создаем новый ключ comment в form__data и указываем input__comment.value
        item.value = '' // Очищаем введенные данные в форме
    }
    input__checkbox.checked = false // Очищаем значения input__checkbox
    input__select.value = '' // Очищаем значения input__checkbox input__select
    input__comment.value = '' // Очищаем значения input__checkbox input__comment
    svg__color.style.color = ''
    console.log(form__data); // Проверяем результат
    let form__data__json = JSON.stringify(form__data) // Переводим form__data в JSON формат
    console.log(form__data__json); // Проверяем результат
})