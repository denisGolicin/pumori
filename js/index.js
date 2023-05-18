
let buttons = [] = document.querySelectorAll('.button-model');
let model = document.querySelector('.model-style');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        model.src = `src/models/Detal_${i}.glb`;
    })
}