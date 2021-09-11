let namberOflands;
let squareOflands;
let shapeOflands;
let resultOfshapes;
let coefficient;
namberOflands = 4;
squareOflands = 400;

shapeOflands = Math.sqrt(squareOflands);
// - длинна стороны участка - корень квадратный из площади - нам известна только площадь
// - коэффициент колличество сторон - 4 + 3*(n-1)
coefficient = 4 + 3*(namberOflands-1);

resultOfshapes = shapeOflands*coefficient;

console.log('Длинна забора составляет', resultOfshapes, 'метров');

