function solveEquation(a, b, c) {
  "use strict";
  
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  
  if (d == 0) {
    arr[0] = +((-b / (2 * a)).toFixed(3));
  } else if (d > 0) {
    arr[0] = +(((-b + Math.sqrt(d)) / (2 * a)).toFixed(3));
    arr[1] = +(((-b - Math.sqrt(d)) / (2 * a)).toFixed(3));
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict"
  
  let totalAmount;
  let S, P, n;
  let paramErrors;
  //Проверка входных параметров на ошибки
  
  if (isNaN(+percent)) {
    return paramErrors = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(+contribution)) {
    return paramErrors = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (isNaN(+amount)) {
    return paramErrors = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  
  //Расчет выплат по ипотеке
  S = +amount - +contribution;
  P = +(percent / 1200);
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let creditLastYear = date.getFullYear();
  n = 12 * (creditLastYear - currentYear) + date.getMonth() - currentDate.getMonth();
  
  totalAmount = (n * (S * (P + (P / (((1 + P) ** n) - 1))))).toFixed(2); 
  return +totalAmount;
}
