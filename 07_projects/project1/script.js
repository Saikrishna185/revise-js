const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    const color = e.target.id;
    switch(color){
      
      case 'grey' :
        body.style.backgroundColor = color;
        break;
      
      case 'white' :
        body.style.backgroundColor = color;
        break;
      
      case 'blue' :
        body.style.backgroundColor = color;
        break;
      
      case 'yellow' :
        body.style.backgroundColor = color;
        break;

      case 'red' :
        body.style.backgroundColor = color;
        break;

      case 'green' :
        body.style.backgroundColor = color;
        break;
      
      default:
        body.style.backgroundColor = 'white';
        break;
    }
  })
})