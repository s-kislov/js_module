let name = "Sergey";
const boss = name;

alert(`Добрый день, ${boss}`);


let a = "" + 2 + 0 // строка со значением 20, так как он определил значения строковыми и конкатенировал их
let b = "" - 2 + 0 // Отнять от строки число нельзя
let c = "4" > "22" // При сравнении строк, сравнивается каждое число. 4 больше 2
let d = 4 + 7 + "px" // после сложения переводит число в строку и получает 11рх
let e = "3px" - 5 // строку с буквами не удалось перевести в число, поэтому результат ошибка "не число"
let f = "30px" + "50px" // оператор конкатенации сложил 2 строки
let g = "50px" - "30px" // отрицание нельзя применить к строкам, поэтому "не число"


console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)