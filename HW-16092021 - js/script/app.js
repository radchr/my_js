let namberOflands;
let squareOflands;
let shapeOflands;
let resultOfshapes;
let coefficient;
namberOflands = prompt('Введите колличество участков ', 4);
squareOflands = prompt('Введите площать участка в кв. м. ', 400);

console.log(namberOflands);
console.log(typeof(namberOflands))


function addLends(n) {
  let div = document.createElement('div');
  div.className = "alert1";
  div.innerHTML = `Участок площадью ${n} кв.м.`;
  let result = document.body.append(div);
  return result;
}

shapeOflands = Math.sqrt(squareOflands);
// - длинна стороны участка - корень квадратный из площади - нам известна только площадь
// - коэффициент колличество сторон - 4 + 3*(n-1)
coefficient = 4 + 3*(namberOflands-1);

resultOfshapes = shapeOflands*coefficient;

let n = Number(namberOflands)
for (let i = 0; i < n; i++) {
  addLends(squareOflands);
  }


let div = document.createElement('div');
div.className = "alert2";
div.innerHTML = `Длинна забора составляет ${Math.round(resultOfshapes)} метров`;

document.body.append(div);

// console.log('Длинна забора составляет', resultOfshapes, 'метров');
/// comment