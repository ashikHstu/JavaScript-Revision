const weight = process.argv[2];

const height = process.argv[3];

// console.log(weight,height)

function calculateBMI(weight, height)
{
    const bmi = (weight / (height*height));
    return bmi;
}

const bmi = calculateBMI(weight,height);


// according to BMI Score: underweight, fit, overweight. Either this person is underweight, or overweight, or fit.

if(bmi<18.9){
    console.log("Underweight.");
}
else if(bmi<25){
    console.log("Fit");
}
else{
    console.log("Overweight");
}