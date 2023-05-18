
let buttons = [] = document.querySelectorAll('.button-model');
let model = document.querySelector('.model-style');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        modelView.src = `src/models/Detal_${i}.glb`;
    })
}