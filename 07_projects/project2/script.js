const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(form.querySelector('#Height').value);
  const weight = parseInt(form.querySelector('#Weight').value);
  const result = document.querySelector('#results');

  if((height === '' || height < 0 || isNaN(height)) || (weight === '' || weight < 0 || isNaN(weight))) {
    result.innerHTML = 'Please provide a valid height and weight';
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
    let category = '';
    if(bmi < 18.5){
      category = 'Underweight';
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
      category = 'Normal weight';
    }
    else if(bmi >= 25 && bmi <= 29.9){
      category = 'Overweight';
    }
    else{
      category = 'Obese';
    }
    result.innerHTML += `<br>Category: ${category}`;
  }
})