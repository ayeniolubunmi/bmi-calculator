const btnEl = document.getElementById("btn");
const bmiResult = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

btnEl.addEventListener('click', function(){
    const heightValue = document.getElementById('height').value/100;
    const weightValue = document.getElementById('weight').value;
    const bmiValue = weightValue/(heightValue*heightValue);
    bmiResult.value = bmiValue;
    if(bmiValue<=18.5){
        weightConditionEl.innerText="Underweight";
    }else if(bmiValue>=18.5 && bmiValue<=24.9){
        weightConditionEl.innerText="Normal weight";
    }else if(bmiValue >=25 && bmiValue <=24.9){
        weightConditionEl.innerText="Overweight";
    }else if(bmiValue >=30){
        weightConditionEl.innerText="Obesity"
    }
})