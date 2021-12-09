/* Первое задание*/

const firstName = prompt('Напишите ваше имя?');
const age = prompt('Сколько вам лет?');

if (age < 20) {
    alert(`Привет, ${firstName}!`);
} else if (20 <= age && age < 45) {
    alert(`Здравствуй, ${firstName}!`);
} else {
    alert(`Здравствуйте, ${firstName}!`);
}

console.log(firstName);
console.log(age);

/* Второе задание */

let nameStudent = prompt('Скажите ваше имя');
let allStudents = ['Стас', ' Турбо', ' Дюша Метёлкин'];

if (nameStudent) {
    alert(`Привет, ${nameStudent}`);
} else {
    console.log(allStudents.toString() + '.');
}

/* Третье задание */

const checkCart = (count, worth, promoCode) => {
    let totalPrice = worth;

    if (5 < count && count <= 10) {
        totalPrice = worth - (worth * 0.05);
    } else if (10 < count) {
        totalPrice = worth - (worth * 0.1);
    }

    if (worth > 10000) {
        totalPrice = worth - 1000;
    }

    if (promoCode.toUpperCase() === 'METHED') {
        totalPrice = worth - (worth * 0.15);
    }

    return totalPrice;
}

console.log(checkCart(2, 9000, 'methed'));

/* Четвертое задание */

const filter = (list, blackList) => {
  let newArr = [];

  for ( i = 0; i < list.length; i++ ) {
    newArr.push(list[i]);
    for ( j = 0; j < blackList.length; j++ ) {
      if (list[i] === blackList[j]) {
        newArr.pop();
      }
    }
  }
  console.log(newArr);
}
filter([1,2,3,4,5], [1,4,5]);



















