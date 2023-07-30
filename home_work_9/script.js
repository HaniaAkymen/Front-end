/*Напишите функцию, которая выводит все числа от 1 до 100. Для чисел, которые кратны 3, вместо числа выведите "Fizz", а для чисел, кратных 5, выведите "Buzz". Если число кратно и 3, и 5, выведите "FizzBuzz".*/

function outputAllNumbers(){
    for (let i = 1; i <= 100; i++){
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        }
        else if
            (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }        
    }
}
console.log("Задача 1")
outputAllNumbers();

/*Создайте объект, представляющий книгу. Каждая книга должна иметь свойства "название", "автор" и "год издания". Выведите информацию о книге в консоль.*/
let book_1 = {bookname: 'book1', autor: 'autor1', year: 2021};

console.log("Задача 2")
console.log(book_1);

/*Напишите функцию, которая находит сумму всех чисел от 1 до 100 и выводит ее в консоль.*/
function summator() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum
}
console.log("Задача 3")
console.log (summator());


/*Создайте объект, представляющий человека. У человека должны быть свойства "имя", "возраст" и "пол". Выведите информацию о человеке в консоль.*/

let human_1 = {
    name:'Peter',
     age: 32,
      gender: 'male'};
console.log("Задача 4")
console.log(human_1);

/*Напишите функцию, которая находит наибольшее число в заданном массиве чисел.*/

function findMaxNumbers(maxnumbers){
    let max = maxnumbers[0];
    for (let i = 1; i < maxnumbers.length; i++){
        if (maxnumbers[i] > max){
            max = maxnumbers[i];
        }       
    }    
    return max;
}

const maxnumbers = [-3, 8, 70, 63, 105, -87];
console.log("Задача 5");
console.log(findMaxNumbers(maxnumbers));

/*Создайте массив объектов, представляющих различных студентов. Каждый объект должен иметь свойства "имя", "возраст" и "оценка". Выведите информацию о каждом студенте в консоль.*/

 let students = [
    {
        name:'Ivan',
        age: 21,
        note: 10
    },

    {
        name:'Vlad',
        age: 22, 
        note: 11
        },
    {
        name: 'Irina',
        age: 23,
        note: 12
    }
        ]

 console.log("Задача 6")
 console.log(students);
 

/*Напишите функцию, которая находит среднее значение всех чисел в заданном массиве.*/

 function findAvarageValue(array){
    let summ_value = 0;
    for (let i = 0; i < array.length; i++){
        summ_value += array[i];
        }  
        return summ_value/array.length     
    }    
 
const array = [-15, 88, 7, 3, 15, -3];
console.log("Задача 7")
console.log(findAvarageValue(array));
