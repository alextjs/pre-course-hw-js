// code


// Создай рандомное число при помощи
// let number1 = Math.floor(Math.random() * 100)
//  а затем проверь их выводя в консоль: «[вставь сюда полученное число] :Это четное число» или «[вставь сюда полученное число] :Это нечетное число». С каждой перезагрузкой страницы у тебя будет новое число.​


let number = Math.floor(Math.random() * 100);

function checkTypeOfNumber (number) {
    if (number % 2 === 0) {
        console.log(number + ' is even.')
    } else {
        console.log(number + ' is odd.');
    }
}

checkTypeOfNumber(number);