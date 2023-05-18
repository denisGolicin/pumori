
let buttons = [] = document.querySelectorAll('.button-model');
let model = document.querySelector('.model-style');
let buttonActive = buttons[0];
buttonActive.style.boxShadow = '0 0 5px #fff';

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        model.src = `src/models/Detal_${i}.glb`;
        buttonActive.style.boxShadow = '0 0 5px black';
        this.style.boxShadow = '0 0 5px #fff';
        buttonActive = buttons[i];
    })
}

const modelViewer = document.querySelector('model-style');

modelViewer.addEventListener('load', () => {
    alert('Модель успешно загружена');
});