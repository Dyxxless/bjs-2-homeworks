function solveEquation(a, b, c) {
  let arr = [];
  let d = b * b - 4 * a * c;

  if(d > 0){
    arr[0] = (-b + Math.sqrt(d))/(2 * a);
    arr[1] = (-b - Math.sqrt(d))/(2 * a);
  }

  else if(d == 0){
    arr[0] = (-b )/(2 * a);
  }

  return arr;
}