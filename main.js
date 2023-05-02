'use strict';

const product = prompt("Наименование товара ?");
const count = prompt("Количество товара в штуках?");
const category = prompt("Категория товара ?");
const price = prompt("Стоимость в деревянных за штуку?");

console.log ("Тип данных в количестве и стоимости" , typeof count, typeof price);

console.log(`На складе ${Number(count)} товара ${product} из категории ${category} 
на сумму ${Number (price * count) } деревянных`);