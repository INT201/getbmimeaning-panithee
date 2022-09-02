const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  let BMI;
  BMI = weight / height*height;
  return BMI;
}

function getBMIMeaning(weight, height) {
  if (calculateBMI(weight,height)< 18.5) {
    return "Underweight";
  } else if (calculateBMI(weight,height)> 18.5 && calculateBMI(weight,height)<24.9) {
    return "Normal Weight";
  } else if(calculateBMI(weight,height) >25.0) {
    return "Overweight";
  }
}

console.log(getBMIMeaning(65, 1.8));
console.log(getBMIMeaning(80, 1.7));
console.log(getBMIMeaning(44, 1.6));

module.exports = getBMIMeaning
