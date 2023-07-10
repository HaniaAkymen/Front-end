setTimeout(function () {
let order_cost = +prompt('Расчет скидок при заказе. Введите стоимость заказа:');

alert(`Цена со скидкой 10% - ${(order_cost*0.9).toFixed(2)}, 
Цена с наценкой 10% - ${(order_cost*1.10).toFixed(2)},
Цена со скидкой 25% - ${(order_cost*0.75).toFixed(2)},
Цена с наценкой 25% - ${(order_cost*1.25).toFixed(2)},
Цена со скидкой 1% - ${(order_cost*0.99).toFixed(2)},
Цена с наценкой 1.5% - ${(order_cost*1.015).toFixed(2)}`);
}, 500);

setTimeout(function () {
let order_cost2 = +prompt('Скидка 5% при покупке от 100 евро. Введите стоимость покупки:');

if (order_cost2 >= 100) {
    alert(`Поздравляем. Вы получаете скидку 5%. Сумма К оплате - ${(order_cost2*0.95).toFixed(2)}`);
} else {
    alert(`К сожалению вашего заказа не достаточно для получения скидки. Сумма к оплате - ${(order_cost2*0.95).toFixed(2)}`);
};
}, 500);

setTimeout(function () {
let user_number = +prompt('Сравненим сумму вашего заказа с 0:');
if (user_number > 0) {
    alert(`Поздравляем. Сумма вашего заказа - ${user_number} больше 0`);
} else if (user_number < 0){
    alert(`Поздравляем. Сумма вашего заказа - ${user_number} меньше 0`);
} else {
    alert(`Поздравляем. Сумма вашего заказа - ${user_number} равна 0`);
};
}, 500);

setTimeout(function () {
let user_number1 = +prompt('Определим последнюю числу вашего заказа. Ввведите сумму заказа');
alert(`Поздравляем. Последняя цифра вашего заказа равна- ${(user_number1 %10)}`);
}, 500);

