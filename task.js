"use strict"

function solveEquation(a, b, c) { 
  let arr = [];
  let d = Math.pow(b, 2)-(4*a*c);
  if (d < 0) {
    } else if (d == 0){
    arr[0] = (-b/(2*a));
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a); 
  }
  
  return arr; 
}

function calculateQuadraticEquation(){
  let a = +window.a.value;
  let b = +window.b.value;
  let c = +window.c.value;
  let result = solveEquation(a,b,c);
  window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
  let span = window.result;
  span.textContent = "х = "+JSON.stringify(result);
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent),  isNaN (contribution), isNaN (amount)) 
    return false;
  }
  let per = percent / 100 / 12; 
  let s = amount - contribution; 
  let pay = s * (per + (per / (Math.pow(1 + per, countMonths) - 1)));
  let totalAmount = +(pay * countMonths).toFixed(2);
  return calculateTotalMortgage;

