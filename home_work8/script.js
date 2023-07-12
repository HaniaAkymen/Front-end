function findOdd(){

    for (let n = 0; n <= 10; n++) {
        if (n % 2 > 0) {
            console.log(n)
     }
    }
}
findOdd();

function find_range(num1, num2) {
    let sum = 0;
    
    for (let i = num1; i <= num2; i++) {
        sum = sum + i;
    } 
    return sum;
}
console.log(find_range(2,18));

let player = [
    ['Dima', 100, 25],
    ['Viktor', 200, 30],
    ['Andrei', 300, 35]
];
console.log(`У игрока ${player[0][0]} здоровье в игре ${player[0][1]}, урон в игре ${player[0][2]}`);
console.log(`У игрока ${player[1][0]} здоровье в игре ${player[1][1]}, урон в игре ${player[1][2]}`);
console.log(`У игрока ${player[2][0]} здоровье в игре ${player[2][1]}, урон в игре ${player[2][2]}`);


function find_arithmetic(numbers) {
    let sum5 = 0;     
    for(let i = 0; i < numbers.length; i++){        
        sum5 = sum5 + numbers[i];
    } 
    console.log(sum5)
    sum5 = sum5 / numbers.length;
    return sum5;
}
console.log(find_arithmetic([2, 6, 8, 10, 12])); 


function find_t(Celcius){
    return Celcius * 1.8 + 32;
}
console.log(`Температура в градусах Фарингейта равна ${find_t(28)}`);















