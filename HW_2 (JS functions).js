// HW_2 JS_functions
// 1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел
function summa(s1, s2){
     console.log(s1 + s2)
}

summa(1, 2)

// 2) Сделать функцию которая вернёт в консоль квадрат переданного числа
function square(sq){
    console.log(sq ** 2)
}

square(9)

// 3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
// {"name":И,
//  "surname":Ф,
//  "middlename":О}
function json(f,i,o){
    console.log(JSON.stringify({name:i, surname:f, middlename:o}))
}

json('И', 'Ф', 'О')

// 4) вывести в консоль переменную-массив в которой будут всечётные числа. Переменную возвращяет функция которая на вход принимает массив чисел.
// Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"

function array(params){
    let counter = 0;
    for(i = 0; i<params.length; i++){
        if(params[i] % 2 == 0){
            console.log(params[i])
            counter++
        }
    }
    if(counter == 0){
        console.log("No even numbers")
    }
}

var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
var y = [1, 3, 5]
array(y);

// 5) Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове.
// Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".
// 6) Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента
// Элементы: Phone number field, CheckBox, SignIn Button.
// 7) Написать функцию которая на вход получает JSON а возвращяет XML